'use client';

import React, { useState } from 'react';
import { Upload, X, FileText, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  value?: string;
  onChange: (url: string) => void;
  accept?: string;
  label?: string;
  folder?: string;
  placeholder?: string;
}

export function FileUpload({
  value,
  onChange,
  accept = 'image/*',
  label,
  folder = 'mega',
  placeholder = 'Drag & drop file here, or click to browse',
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const isImage = value ? (value.startsWith('data:image/') || value.match(/\.(jpeg|jpg|gif|png|webp|svg)/i) || !value.endsWith('.pdf')) : false;
  const isPdf = value ? (value.endsWith('.pdf') || value.startsWith('data:application/pdf')) : false;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processUpload(file);
    }
  };

  const processUpload = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      onChange(data.url);
    } catch (err: any) {
      console.error('Upload Error:', err);
      setError(err?.message || 'Failed to upload file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processUpload(file);
    }
  };

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
          {label}
        </label>
      )}

      {/* Upload Box or Preview Card */}
      {value ? (
        <div className="relative group bg-[#18181c] border border-white/15 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-lg overflow-hidden">
          {/* Image Preview */}
          {isImage && (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/50 border border-white/10 shrink-0 relative">
                <img src={value} alt="Uploaded File" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden text-xs space-y-1">
                <span className="font-semibold text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Image Uploaded
                </span>
                <p className="text-gray-400 font-mono text-[10px] truncate max-w-[200px] sm:max-w-[300px]">
                  {value}
                </p>
              </div>
            </div>
          )}

          {/* PDF Preview */}
          {isPdf && (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="overflow-hidden text-xs space-y-1">
                <span className="font-semibold text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  PDF Document Uploaded
                </span>
                <p className="text-gray-400 font-mono text-[10px] truncate max-w-[200px] sm:max-w-[300px]">
                  {value}
                </p>
              </div>
            </div>
          )}

          {/* Fallback for other file types */}
          {!isImage && !isPdf && (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div className="overflow-hidden text-xs space-y-1">
                <span className="font-semibold text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  File Uploaded
                </span>
                <p className="text-gray-400 font-mono text-[10px] truncate max-w-[200px] sm:max-w-[300px]">
                  {value}
                </p>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <label className="cursor-pointer px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-all">
              Replace
              <input type="file" accept={accept} onChange={handleFileChange} className="hidden" />
            </label>
            <button
              type="button"
              onClick={() => onChange('')}
              className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all"
              title="Remove File"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Drag & Drop Upload Zone */
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
            dragOver
              ? 'border-orange-500 bg-orange-500/10'
              : 'border-white/15 bg-[#141418] hover:border-orange-500/40 hover:bg-[#18181d]'
          }`}
        >
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            disabled={uploading}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
          />

          {uploading ? (
            <div className="flex flex-col items-center gap-2 py-2">
              <Loader2 className="w-8 h-8 text-orange-400 animate-spin" />
              <span className="text-xs font-bold text-white tracking-wider uppercase">
                Uploading File...
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 pointer-events-none">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-md mb-1">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-white">{placeholder}</p>
              <p className="text-xs text-gray-400">Supported formats: {accept}</p>
            </div>
          )}
        </div>
      )}

      {/* Error alert */}
      {error && (
        <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/30 border border-red-500/20 p-2.5 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
