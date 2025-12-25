import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Calendar, Clock, MapPin } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  age: z.string().min(1, "Age is required"),
  date: z.string().min(1, "Date is required"),
  slot: z.string().min(1, "Time slot is required"),
  symptoms: z.array(z.string()).optional()
});

type BookingForm = z.infer<typeof bookingSchema>;

export const Booking = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = (data: BookingForm) => {
    // Mock API call
    setTimeout(() => {
      toast.success("Appointment Confirmed! We've sent details to your WhatsApp.");
    }, 1000);
  };

  const slots = ["10:00 AM", "11:00 AM", "12:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Book Your Free Eye Checkup</h1>
          <p className="text-slate-600">Expert Optometrists • Advanced Computerized Testing • No Waiting</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info Card */}
          <div className="md:col-span-1 bg-medical-900 text-white rounded-2xl p-8 shadow-xl h-fit">
             <h3 className="text-xl font-bold mb-6">Clinic Info</h3>
             <div className="space-y-6">
               <div className="flex items-start space-x-3">
                 <MapPin className="mt-1 h-5 w-5 text-gold-500"/>
                 <p className="text-sm text-gray-200">Shop 12, Model Town Market, Ludhiana, Punjab 141002</p>
               </div>
               <div className="flex items-start space-x-3">
                 <Clock className="mt-1 h-5 w-5 text-gold-500"/>
                 <div className="text-sm text-gray-200">
                   <p>Mon - Sat</p>
                   <p className="font-bold">10:00 AM - 08:00 PM</p>
                 </div>
               </div>
               <div className="pt-6 border-t border-medical-700">
                 <p className="text-xs text-medical-200 mb-2">DOCTOR IN CHARGE</p>
                 <p className="font-bold">Dr. Satyam (B.Optom)</p>
                 <p className="text-sm">Myopia Specialist</p>
               </div>
             </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Patient Name</label>
                   <input 
                     {...register('name')}
                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-500 outline-none"
                     placeholder="Enter full name"
                   />
                   {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                   <input 
                     type="number"
                     {...register('age')}
                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-500 outline-none"
                     placeholder="Years"
                   />
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number (WhatsApp)</label>
                 <input 
                   type="tel"
                   {...register('phone')}
                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-500 outline-none"
                   placeholder="+91 98765 43210"
                 />
                 {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                 <input 
                    type="date"
                    {...register('date')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-500 outline-none"
                 />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Select Time Slot</label>
                 <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                   {slots.map(slot => (
                     <label key={slot} className="cursor-pointer">
                       <input 
                         type="radio" 
                         value={slot} 
                         {...register('slot')}
                         className="peer sr-only"
                       />
                       <div className="text-center py-2 text-sm rounded-lg border border-gray-200 peer-checked:bg-medical-900 peer-checked:text-white peer-checked:border-medical-900 transition-all hover:border-medical-500">
                         {slot}
                       </div>
                     </label>
                   ))}
                 </div>
                 {errors.slot && <p className="text-red-500 text-xs mt-1">{errors.slot.message}</p>}
               </div>

               <button type="submit" className="w-full bg-gold-500 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gold-600 transition-colors">
                 Confirm Booking
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};
