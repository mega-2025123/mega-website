'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.enum(['Notice', 'Workshop', 'Recruitment', 'Seminar', 'General']),
  priority: z.enum(['Low', 'Normal', 'High', 'Urgent']),
  pinned: z.boolean(),
  expiryDate: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewAnnouncementPage() {
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'General',
      priority: 'Normal',
      pinned: false,
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-white font-heading">Create Announcement</h1>
        <button type="submit" className="px-6 py-2 bg-orange-500/100 hover:bg-orange-600 text-white rounded-xl transition-colors font-medium shadow-sm shadow-orange-500/20">
          Save Announcement
        </button>
      </div>

      <div className="bg-[#121215]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
          <input 
            {...register('title')}
            className="w-full text-lg px-4 py-3 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-gray-400"
            placeholder="Announcement Title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Type</label>
            <select 
              {...register('type')}
              className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            >
              <option value="Notice">Notice</option>
              <option value="Workshop">Workshop</option>
              <option value="Recruitment">Recruitment</option>
              <option value="Seminar">Seminar</option>
              <option value="General">General</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Priority</label>
            <select 
              {...register('priority')}
              className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center h-full pt-6">
            <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-xl hover:bg-[#18181c] border-white/10 text-white transition-colors w-full">
              <input 
                type="checkbox"
                {...register('pinned')}
                className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm font-medium text-gray-300">Pin to top</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Expiry Date (Optional)</label>
            <input 
              type="date"
              {...register('expiryDate')}
              className="w-full px-4 py-2 bg-[#18181c] border-white/10 text-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Content</label>
          <div className="w-full min-h-[300px] border border-gray-200 rounded-xl bg-[#18181c] border-white/10 text-white flex items-center justify-center text-gray-400">
            Rich text editor will be loaded here
          </div>
        </div>
      </div>
    </form>
  );
}
