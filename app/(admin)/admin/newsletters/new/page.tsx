'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FileUp, Image as ImageIcon } from 'lucide-react';
import { FileUpload } from '@/src/components/admin/FileUpload';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  issueNumber: z.string().optional(),
  publishDate: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewNewsletterPage() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-white font-heading">Upload Newsletter</h1>
        <button type="submit" className="px-6 py-2 bg-orange-500/100 hover:bg-orange-600 text-white rounded-xl transition-colors font-medium shadow-sm shadow-orange-500/20">
          Save Newsletter
        </button>
      </div>

      <div className="bg-[#121215]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input 
                {...register('title')}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                placeholder="Newsletter Title"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">Issue Number</label>
                <input 
                  {...register('issueNumber')}
                  className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  placeholder="e.g. Vol 1. Issue 4"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">Publish Date</label>
                <input 
                  type="date"
                  {...register('publishDate')}
                  className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea 
                {...register('description')}
                rows={4}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                placeholder="Brief description of this issue..."
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <FileUpload
                label="PDF File"
                value={pdfUrl}
                onChange={(url) => setPdfUrl(url)}
                accept="application/pdf"
                placeholder="Click or drag PDF newsletter file here"
              />
            </div>

            <div>
              <FileUpload
                label="Thumbnail Cover"
                value={thumbnailUrl}
                onChange={(url) => setThumbnailUrl(url)}
                accept="image/*"
                placeholder="Click or drag newsletter cover image here"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
