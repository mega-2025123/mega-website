'use client';

import { Upload, FolderOpen, Copy, Trash2, Grid, List, Search, Check, FileText, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { FileUpload } from '@/src/components/admin/FileUpload';

interface MediaFile {
  id: string;
  name: string;
  url: string;
  type: string;
  size: string;
  date: string;
}

export default function MediaLibraryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [showUploader, setShowUploader] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [files, setFiles] = useState<MediaFile[]>([
    { id: '1', name: 'Industrial Visit Jindal.jpg', url: '/assets/Industrial Visit-Jindhal.jpg', type: 'image', size: '2.4 MB', date: '2025-03-10' },
    { id: '2', name: '3D Printing Workshop.jpg', url: '/assets/3D-Printing.jpg', type: 'image', size: '1.8 MB', date: '2025-03-12' },
    { id: '3', name: 'Guest Lecture.jpg', url: '/assets/Guest Lecture.jpg', type: 'image', size: '1.2 MB', date: '2025-03-15' },
    { id: '4', name: 'Freshers Event.jpg', url: '/assets/Freshers.jpg', type: 'image', size: '2.1 MB', date: '2025-03-18' },
    { id: '5', name: 'NSS Cleanliness Drive.jpeg', url: '/assets/NSS.jpeg', type: 'image', size: '1.5 MB', date: '2025-03-20' },
  ]);

  const handleFileUpload = (url: string) => {
    if (url) {
      const isPdf = url.endsWith('.pdf') || url.startsWith('data:application/pdf');
      const newFile: MediaFile = {
        id: String(Date.now()),
        name: `Uploaded File ${files.length + 1}`,
        url,
        type: isPdf ? 'document' : 'image',
        size: '1.2 MB',
        date: new Date().toISOString().split('T')[0],
      };
      setFiles([newFile, ...files]);
      setShowUploader(false);
    }
  };

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const deleteFile = (id: string) => {
    setFiles(files.filter(f => f.id !== id));
  };

  const filteredFiles = files.filter(f => {
    if (activeTab === 'Images') return f.type === 'image';
    if (activeTab === 'Documents') return f.type === 'document';
    if (activeTab === 'Videos') return f.type === 'video';
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Media Library</h1>
          <p className="text-gray-400 text-xs mt-0.5">Central repository for all uploaded images, PDFs, and media assets</p>
        </div>
        <button
          onClick={() => setShowUploader(!showUploader)}
          className="flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-all shadow-md cursor-pointer"
        >
          <Upload className="h-4 w-4" />
          {showUploader ? 'Close Uploader' : 'Upload Assets'}
        </button>
      </div>

      {/* Upload Drawer */}
      {showUploader && (
        <div className="bg-[#121215]/90 border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider">Upload Asset to Media Library</h3>
          <FileUpload
            accept="*"
            folder="mega/media"
            placeholder="Click or drag any file (image, PDF, document) to upload"
            onChange={handleFileUpload}
          />
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#121215]/90 border border-white/[0.08] rounded-2xl p-4 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          {['All', 'Images', 'Documents', 'Videos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(255,69,0,0.3)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Files Grid */}
      {filteredFiles.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#121215]/50 py-16 text-center">
          <FolderOpen className="h-12 w-12 text-gray-500 mb-4" />
          <h3 className="font-heading text-lg font-semibold text-white">No files found</h3>
          <p className="mt-1 text-xs text-gray-400">Upload assets to populate your media library.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="group bg-[#141418] border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all hover:border-orange-500/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Preview Box */}
                <div className="h-44 w-full bg-black/60 overflow-hidden relative flex items-center justify-center p-2">
                  {file.type === 'image' ? (
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-orange-400">
                      <FileText className="w-12 h-12" />
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">PDF Document</span>
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-1">
                  <p className="text-xs font-bold text-white truncate" title={file.name}>
                    {file.name}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono">
                    {file.size} · {file.date}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="px-4 py-3 border-t border-white/5 bg-black/20 flex items-center justify-between">
                <button
                  onClick={() => copyUrl(file.id, file.url)}
                  className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {copiedId === file.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-orange-400" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => deleteFile(file.id)}
                  className="text-gray-500 hover:text-red-400 transition-colors p-1"
                  title="Delete Asset"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
