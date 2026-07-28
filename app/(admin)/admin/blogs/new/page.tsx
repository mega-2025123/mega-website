'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronDown, Image as ImageIcon } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  summary: z.string().optional(),
  status: z.enum(['Draft', 'Published', 'Scheduled']),
  category: z.string().optional(),
  tags: z.string().optional(),
  publishDate: z.string().optional(),
  featured: z.boolean(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  canonicalUrl: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewBlogPage() {
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: 'Draft',
      featured: false,
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('title', value);
    setValue('slug', value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-white font-heading">Create Blog Post</h1>
        <div className="flex gap-3">
          <button type="button" className="px-4 py-2 bg-[#18181c] border border-white/10 text-white text-gray-300 rounded-xl hover:bg-[#18181c] border-white/10 text-white transition-colors font-medium">
            Save Draft
          </button>
          <button type="submit" className="px-4 py-2 bg-orange-500/100 hover:bg-orange-600 text-white rounded-xl transition-colors font-medium shadow-sm shadow-orange-500/20">
            Publish
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="bg-[#121215]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input 
                {...register('title')}
                onChange={handleTitleChange}
                className="w-full text-xl px-4 py-3 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
                placeholder="Enter blog post title"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Slug</label>
              <input 
                {...register('slug')}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                placeholder="blog-post-slug"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Summary</label>
              <textarea 
                {...register('summary')}
                rows={3}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                placeholder="Brief summary of the blog post..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Content</label>
              <div className="w-full min-h-[400px] border border-gray-200 rounded-xl bg-[#18181c] border-white/10 text-white flex items-center justify-center text-gray-400">
                Rich text editor will be loaded here
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-[#121215]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-sm space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
              <select 
                {...register('status')}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Scheduled">Scheduled</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <input 
                {...register('category')}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                placeholder="e.g. Technology"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Tags</label>
              <input 
                {...register('tags')}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                placeholder="Comma separated tags"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Publish Date</label>
              <input 
                type="date"
                {...register('publishDate')}
                className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-xl hover:bg-[#18181c] border-white/10 text-white transition-colors">
              <input 
                type="checkbox"
                {...register('featured')}
                className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm font-medium text-gray-300">Featured Post</span>
            </label>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Cover Image</label>
              <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-xl bg-[#18181c] border-white/10 text-white flex flex-col items-center justify-center text-gray-400 hover:bg-gray-100 hover:border-orange-300 transition-all cursor-pointer">
                <ImageIcon size={32} className="mb-2 text-gray-300" />
                <span className="text-sm font-medium text-gray-600">Click to upload image</span>
                <span className="text-xs mt-1 text-gray-400">PNG, JPG up to 5MB</span>
              </div>
            </div>
          </div>

          <div className="bg-[#121215]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl shadow-sm overflow-hidden">
            <button 
              type="button"
              onClick={() => setIsSeoOpen(!isSeoOpen)}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#18181c] border-white/10 text-white transition-colors"
            >
              <span className="font-semibold text-white font-heading">SEO Settings</span>
              <ChevronDown size={20} className={`text-gray-400 transition-transform ${isSeoOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSeoOpen && (
              <div className="p-6 pt-0 space-y-4 border-t border-gray-50">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Meta Title</label>
                  <input 
                    {...register('metaTitle')}
                    className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Meta Description</label>
                  <textarea 
                    {...register('metaDescription')}
                    rows={3}
                    className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Canonical URL</label>
                  <input 
                    {...register('canonicalUrl')}
                    className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
