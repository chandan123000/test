/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ICONS, Screen } from './types';

// --- Components ---

const NavBar = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
  const items = [
    { id: 'home', label: 'Home', icon: ICONS.Home },
    { id: 'activity', label: 'Activity', icon: ICONS.History },
    { id: 'wallet', label: 'Wallet', icon: ICONS.Wallet },
    { id: 'profile', label: 'Profile', icon: ICONS.User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 px-6 py-3 z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id as Screen)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentScreen === item.id ? 'text-primary' : 'text-slate-400'
            }`}
          >
            <item.icon size={20} fill={currentScreen === item.id ? 'currentColor' : 'none'} />
            <span className={`text-[10px] ${currentScreen === item.id ? 'font-bold' : 'font-medium'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

// --- Screens ---

const HomeScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="flex items-center justify-between px-6 pt-6 pb-2">
        <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary">
          <ICONS.Menu size={20} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-primary">Vovo</h1>
        <div className="flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary">
          <ICONS.Bell size={20} />
        </div>
      </header>

      <main className="px-6 py-4 space-y-6">
        <section>
          <div className="relative group" onClick={() => setScreen('ride-selection')}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <ICONS.Search size={20} className="text-primary" />
            </div>
            <input
              className="block w-full pl-12 pr-4 py-4 bg-primary/5 border-none rounded-xl focus:ring-2 focus:ring-primary text-slate-900 dark:text-slate-100 placeholder-slate-500 font-medium cursor-pointer"
              placeholder="Where are you going?"
              readOnly
            />
          </div>
        </section>

        <section>
          <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-primary/20">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-1">We're now closer to you!</h2>
              <p className="text-white/80 text-sm mb-4">Check out our expanded service areas across the city.</p>
              <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold">Learn More</button>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 opacity-20">
              <ICONS.MapPin size={100} />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Recent destinations</h3>
            <button className="text-primary text-sm font-semibold">See all</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'SMR Harmika', location: 'Kukatpally, Hyderabad' },
              { name: 'Shamshabad', location: 'Airport Road, Hyderabad' },
            ].map((dest, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer" onClick={() => setScreen('ride-selection')}>
                <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <ICONS.Clock size={20} />
                </div>
                <div className="flex-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{dest.name}</h4>
                  <p className="text-xs text-slate-500">{dest.location}</p>
                </div>
                <ICONS.ChevronRight size={20} className="text-slate-300" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-4">Everything in Minutes</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Parcel', icon: ICONS.Package, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
              { label: 'Metro', icon: ICONS.Train, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
              { label: 'Scooty', icon: ICONS.Bike, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
              { label: 'More', icon: ICONS.LayoutGrid, color: 'text-slate-600', bg: 'bg-slate-100 dark:bg-slate-800' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 cursor-pointer">
                <div className={`w-full aspect-square ${item.bg} rounded-2xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-2xl overflow-hidden relative h-40 bg-slate-200">
            <img 
              alt="City Map" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtsFmSN4ymXuVK9S5OHyDs4B6Iy4XmW07BwcK64RvQy6fbGQD1A_BC3ZWsEqVN_X496U7aGgMehDVHNvcL246qfCIAziNJKTFNpLOhs5FyekcpdUN-DEVDlxcxgbJl5CfXWMMGlSZ6SMXovJeGKORncBkjhmdrpo7rwV6buHb9e0AWtS4NonxtXcjpEoSmazK7aN95b3iQNKzOZiIoCvRIbquu4vurXfYAz41bn5sEYE6gWHdOxpCFGrg8D3N9b2GYEA64zrtkPgg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
              <p className="text-white font-bold">Live traffic in your area</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const RideSelectionScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Top App Bar Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 justify-between border-b border-primary/10">
        <div className="flex items-center gap-3">
          <button onClick={() => setScreen('home')} className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
            <ICONS.ArrowLeft size={20} />
          </button>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Vovo</h2>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ICONS.User size={20} />
        </div>
      </div>

      {/* Map Background Section */}
      <div className="relative flex-1 w-full bg-slate-200 dark:bg-slate-800">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNM-GK4j_pdkltKdRNvbSWWi-mCjvzyeu7d5HcwbHNlbblEMBqPOzNBIJbXySvodmpZF7c0LLzQ4-OMtPiFOXeCuy5TRT2AdF45sP_4d30ou047iJBOWH9RqwubVDPXqGaNPRlgZI6wdah0EnCoXbI1jPb2aUoYRRl-Ywgf_zKzYMRSSp_G_wDEhJ8i5l-BIVTIfTU9N4dseJUSPQELw7t9tICH2TB6YZjg6w7pp6x_ChKiv-nkSdcTuPlwMJIQw6N32_cqYGAxYE')" }}
        ></div>
        
        {/* Map UI Elements */}
        <div className="absolute top-24 left-4 right-4 z-10">
          <div className="flex flex-col gap-2 bg-white dark:bg-background-dark p-3 rounded-xl shadow-lg border border-primary/10">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-green-500"></div>
              <div className="flex-1 text-sm font-medium border-b border-slate-100 dark:border-slate-700 pb-2">Indiranagar 100ft Rd</div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <ICONS.MapPin size={14} className="text-primary" />
              <div className="flex-1 text-sm font-medium">Koramangala Sony Signal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ride Selection Bottom Sheet */}
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-stretch bg-white dark:bg-background-dark rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] max-h-[70vh] overflow-hidden border-t border-primary/5"
      >
        <div className="flex h-6 w-full items-center justify-center pt-2">
          <div className="h-1.5 w-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-32">
          <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight pt-2 pb-4">Select your ride</h3>
          <div className="flex flex-col gap-2">
            {[
              { id: 'bike', label: 'Bike', price: '₹45', desc: '1 person, Quick Bike rides', time: '10:30 AM drop', icon: ICONS.Bike, selected: true },
              { id: 'scooty', label: 'Scooty', price: '₹52', desc: '1 person, Eco-friendly', time: '10:32 AM drop', icon: ICONS.Bike },
              { id: 'auto', label: 'Auto', price: '₹88', desc: '3 people, Doorstep pickup', time: '10:35 AM drop', icon: ICONS.Car },
              { id: 'auto-pro', label: 'Auto Priority', price: '₹112', desc: 'Fastest allocation', time: '10:28 AM drop', icon: ICONS.Car, pro: true },
            ].map((ride) => (
              <div 
                key={ride.id}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  ride.selected 
                    ? 'bg-primary/10 dark:bg-primary/20 border-primary' 
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className={`flex items-center justify-center rounded-lg shrink-0 size-14 ${ride.selected ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  <ride.icon size={24} />
                  {ride.pro && <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[8px] px-1 rounded-full font-bold">PRO</span>}
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-900 dark:text-slate-100 text-lg font-bold">{ride.label}</p>
                    <p className="text-slate-900 dark:text-slate-100 text-lg font-bold">{ride.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`${ride.selected ? 'text-primary' : 'text-slate-500'} text-sm font-medium`}>{ride.desc}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{ride.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Action Area */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <ICONS.Receipt size={16} />
              <span className="text-sm font-semibold uppercase tracking-wider">Cash</span>
            </div>
            <div className="text-primary text-sm font-bold flex items-center gap-1 cursor-pointer">
              Offers Available <ICONS.ChevronRight size={16} />
            </div>
          </div>
          <button 
            onClick={() => setScreen('ride-details')}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Book Bike
            <ICONS.TrendingUp size={20} className="rotate-90" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ProfileScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const menuItems = [
    { label: 'Help', icon: ICONS.HelpCircle, screen: 'help-center' },
    { label: 'Parcel - Send Items', icon: ICONS.Package, screen: 'document-centre' },
    { label: 'Payment', icon: ICONS.Wallet },
    { label: 'My Rides', icon: ICONS.Car },
    { label: 'Safety', icon: ICONS.Shield },
    { divider: true },
    { label: 'Refer and Earn', icon: ICONS.Share2 },
    { label: 'My Rewards', icon: ICONS.Gift },
    { label: 'Power Pass', icon: ICONS.Ticket },
    { label: 'Vovo Coins', icon: ICONS.Coins },
    { divider: true },
    { label: 'Notifications', icon: ICONS.Bell },
    { label: 'Claims', icon: ICONS.FileText },
    { label: 'Settings', icon: ICONS.Settings, screen: 'settings' },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-white dark:bg-background-dark">
      <div className="sticky top-0 z-10 flex items-center bg-white dark:bg-background-dark p-4 border-b border-primary/10">
        <button onClick={() => setScreen('home')} className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <ICONS.ArrowLeft size={20} />
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 ml-2">Profile</h2>
      </div>

      <div className="p-4">
        <div className="flex w-full flex-col gap-4 bg-primary/5 dark:bg-primary/10 p-4 rounded-xl">
          <div className="flex gap-4 items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-primary" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOKtXQLH-tVmpPM8qJwQ4zmq5T-h9tFXcA5aUo5_hE_MTROHJ42gzHymwHxAqr4n-efSRI550diXSxwgLsjetQTkT3FM-jN4Dr88AsnVw1rd7h2fqZFF09LtwdB_gWlcK8nJ2NPTBmpqieHYW6iBpEq_mCo3xtWbQRGhMl7PwiUWxKbYpK7QZ2ytYciOveYDkZdpmJiAU3CATtwmP0cAvrUUjRSBXEB9vkusA6XxSuuFN714GdtQbeA5znDrC5S2FbrWZ6-4tRc6k")' }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">Chandan Vishwakarma</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">+91 9876543210</p>
              <div className="flex items-center gap-1 mt-1 bg-white dark:bg-slate-800 self-start px-2 py-0.5 rounded-full border border-primary/20">
                <ICONS.Star size={12} className="text-yellow-500 fill-current" />
                <p className="text-slate-800 dark:text-slate-200 text-xs font-bold">4.30 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2">
        {menuItems.map((item, i) => (
          item.divider ? (
            <div key={i} className="h-px bg-primary/10 my-2 mx-4" />
          ) : (
            <div 
              key={i} 
              onClick={() => item.screen && setScreen(item.screen as Screen)}
              className="flex items-center gap-4 hover:bg-primary/5 dark:hover:bg-primary/10 p-3 rounded-lg transition-colors cursor-pointer group"
            >
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                {item.icon && <item.icon size={20} />}
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-base font-medium flex-1 truncate">{item.label}</p>
              <ICONS.ChevronRight size={20} className="text-slate-400 group-hover:text-primary" />
            </div>
          )
        ))}
      </div>
      <div className="p-6 text-center">
        <p className="text-slate-400 text-xs">Vovo App Version 5.42.1</p>
      </div>
    </div>
  );
};

const RideDetailsScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      <div className="flex items-center bg-white dark:bg-background-dark p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10">
        <button onClick={() => setScreen('home')} className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ICONS.ArrowLeft size={20} />
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 ml-2">Ride Details</h2>
        <div className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-primary/10 rounded-full transition-colors">
          <ICONS.Share2 size={20} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
          <img 
            className="w-full h-full object-cover opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4rZRFELlT8lES_7DyhSq21oSIyqDUgJ56vURSrDa7pBRo3MbrHc-swH9HhewJJ3ncNQ61NRxT6_xCvyisS7UOtLN-JkFAH44nRvZ2Qn_k45FvBx3gVckS_Q2mLHe9Aa2EB8EkDGOBz2Tp9iEFfZVuBC_VBzgpqpnu1Fh3HHzb6D-E84LnxKs967ncGxk9gx0h7LTvpeZcw-cBVxpumN_cP7FC1B69y8FHm3cCypnus2s9z27HV1N8efvzqvalMBVEjkdq-pUrZmo"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>

        <div className="px-4 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Completed Ride</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Oct 24, 2023 • 08:30 PM</p>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Bike
            </div>
          </div>
        </div>

        <div className="px-4 py-6 flex items-center gap-4">
          <div className="relative">
            <img 
              className="size-14 rounded-full object-cover border-2 border-primary/20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACPpVTGm5QFksd1AVtkLHoDXXEo3Rs8qzOmP1veBsFG6h7WvQ5hdntOSHClPAThRDHi1_a3gnX_muGYROu623Hj8aIjQFl-_LlY2h98G4Nqo14cHMgOr5lXJRQRKVTZMPWZKlpvyiokEwRqYbK-xhJ-aG6imaCIW9ycF1u16Jt4al9NOHoawKTWz1rXXnk-AHAJop6eYNDKySlMGDb2myQ3lno_1ljV5_hwD4KlkxoHhtq2iuGe6lo-tkiwwi4uFSC0_pwrSYB_7I"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-slate-900 text-[10px] font-bold px-1 rounded flex items-center">
              4.9 <ICONS.Star size={10} className="ml-0.5 fill-current" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold">Raju Gaulla</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">Royal Enfield Classic 350 • TS 09 EA 1234</p>
          </div>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <ICONS.Phone size={18} />
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <ICONS.MessageSquare size={18} />
            </button>
          </div>
        </div>

        <div className="px-4 py-4 space-y-0.5">
          <div className="flex items-start gap-4 min-h-[64px]">
            <div className="flex flex-col items-center">
              <div className="text-primary flex items-center justify-center size-6 rounded-full bg-primary/10">
                <div className="size-2 rounded-full bg-primary" />
              </div>
              <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-800 my-1"></div>
            </div>
            <div className="flex flex-col pt-0.5">
              <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Amrit Nivas</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">Pickup Location</p>
            </div>
          </div>
          <div className="flex items-start gap-4 min-h-[64px]">
            <div className="text-red-500 flex items-center justify-center size-6 rounded-full bg-red-50">
              <ICONS.MapPin size={14} />
            </div>
            <div className="flex flex-col pt-0.5">
              <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Secretariat Colony</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">Dropoff Location</p>
            </div>
          </div>
        </div>

        <div className="h-2 bg-slate-50 dark:bg-slate-900/50"></div>

        <div className="p-4 bg-white dark:bg-background-dark">
          <div className="flex items-center gap-2 mb-4">
            <ICONS.Receipt size={20} className="text-primary" />
            <h4 className="text-slate-900 dark:text-slate-100 text-base font-bold">Fare Breakdown</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <p className="text-slate-500 dark:text-slate-400">Ride Charge</p>
              <p className="text-slate-900 dark:text-slate-100 font-medium">₹79.81</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <p className="text-slate-500 dark:text-slate-400">Booking Fees</p>
              <p className="text-slate-900 dark:text-slate-100 font-medium">₹31.19</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <p className="text-primary font-medium">Discount (PROMO15)</p>
              <p className="text-primary font-bold">-₹15.00</p>
            </div>
            <div className="pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold">Total Paid</p>
              <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">₹96.0</p>
            </div>
          </div>
          <div className="mt-6 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ICONS.Wallet size={16} className="text-slate-500" />
              <p className="text-xs text-slate-600 dark:text-slate-400">Paid via Vovo Wallet</p>
            </div>
            <ICONS.ChevronRight size={16} className="text-slate-400" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 z-50">
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
          Book Another Ride
        </button>
      </div>
    </div>
  );
};

const SettingsScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const sections = [
    {
      title: 'General',
      items: [
        { label: 'Profile', sub: '+1 234 567 890', icon: ICONS.User },
        { label: 'Favourites', sub: 'Manage your saved items', icon: ICONS.Star },
        { label: 'Preferences', sub: 'Theme, Language, and more', icon: ICONS.Settings },
        { label: 'App shortcuts', sub: 'Customize quick actions', icon: ICONS.TrendingUp },
      ]
    },
    {
      title: 'Others',
      items: [
        { label: 'About Vovo', sub: 'Version 2.4.0 (Build 892)', icon: ICONS.Info },
        { label: 'Subscribe to Beta', sub: 'Try new features first', icon: ICONS.TrendingUp },
        { label: 'Logout', icon: ICONS.LogOut, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30' },
        { label: 'Delete Account', sub: 'Permanently remove your data', icon: ICONS.UserMinus, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30' },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
      <div className="sticky top-0 z-10 flex items-center bg-white dark:bg-background-dark p-4 border-b border-slate-100 dark:border-slate-800 justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => setScreen('profile')} className="text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
            <ICONS.ArrowLeft size={24} />
          </button>
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Settings</h2>
        </div>
        <button className="text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
          <ICONS.HelpCircle size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-primary text-xs font-bold leading-tight tracking-widest px-6 pb-2 pt-8 uppercase">{section.title}</h3>
            <div className="space-y-1 px-2">
              {section.items.map((item, j) => (
                <a key={j} className="flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 p-4 rounded-xl transition-colors" href="#">
                  <div className={`${item.color || 'text-primary'} flex items-center justify-center rounded-xl ${item.bg || 'bg-primary/10'} shrink-0 size-12`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className={`${item.color || 'text-slate-900 dark:text-slate-100'} text-base font-semibold leading-normal truncate`}>{item.label}</p>
                    {item.sub && <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal truncate">{item.sub}</p>}
                  </div>
                  {!item.color && (
                    <div className="shrink-0 text-slate-400">
                      <ICONS.ChevronRight size={20} />
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HelpCenterScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 bg-white dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => setScreen('profile')} className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
            <ICONS.ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Help Center</h2>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="px-4 py-4 bg-white dark:bg-background-dark border-b border-primary/5">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-primary/5 dark:bg-primary/10 overflow-hidden border border-primary/10">
            <div className="text-primary/60 flex items-center justify-center pl-4">
              <ICONS.Search size={20} />
            </div>
            <input className="flex w-full border-none bg-transparent focus:ring-0 text-base font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4" placeholder="Search for help topics" />
          </div>
        </div>

        <section className="p-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pb-3">Your last ride</h3>
          <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-4 shadow-sm border border-primary/5">
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-900 dark:text-slate-100 text-base font-bold">Trip to Downtown</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Oct 24, 10:30 AM • ₹150.00</p>
                </div>
                <button onClick={() => setScreen('ride-details')} className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white gap-2 text-sm font-semibold w-fit mt-3">
                  <span>View Details</span>
                  <ICONS.ChevronRight size={14} />
                </button>
              </div>
              <div 
                className="w-24 h-24 bg-primary/10 rounded-lg overflow-hidden shrink-0 border border-primary/5 bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzOHuEccAjt4XlLpqMi9uxWzeKuudbY6kisctOzU6CxTz7MneC8nx-Xh9qVS7IW9LHERdTxchf-qpMdJvyvF_oMn0g2BSDKtEFOeWFnCaJyrXCGrJ4JhBqhcqP21sFdlStUxKt-e_ypTYahVC1gyjnKsVDfUPlE8Afp0P6Cf30b_hxza6bmXYjRsD9RPtHolQOdcDfq5tJhgnUOLNjeAlOTACsQ_q_atdPFQJoCaz4O_UKShSDlcvJyE26-Ggp6QtuYnZRUqBYDSA")' }}
              ></div>
            </div>
          </div>
        </section>

        <section className="px-4 py-4 space-y-2">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pb-2">Browse Help Topics</h3>
          {[
            { label: 'Ride fare related issues', icon: ICONS.Receipt },
            { label: 'Captain and Vehicle related issues', icon: ICONS.Car },
            { label: 'Pass and Payment related issues', icon: ICONS.Wallet },
            { label: 'Parcel Related issues', icon: ICONS.Package },
            { label: 'Other Topics', icon: ICONS.LayoutGrid },
          ].map((topic, i) => (
            <a key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-primary/5 hover:border-primary/20 transition-all group" href="#">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <topic.icon size={20} />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-200">{topic.label}</span>
              </div>
              <ICONS.ChevronRight size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

const DocumentCentreScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-primary/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setScreen('profile')} className="flex items-center justify-center p-1 rounded-full hover:bg-primary/10 transition-colors">
            <ICONS.ArrowLeft size={24} className="text-slate-900 dark:text-slate-100" />
          </button>
          <h1 className="text-xl font-bold tracking-tight">Document Centre</h1>
        </div>
        <button className="flex items-center justify-center p-1 rounded-full hover:bg-primary/10 transition-colors">
          <ICONS.HelpCircle size={24} className="text-primary" />
        </button>
      </header>

      <main className="max-w-md mx-auto">
        <section className="p-4">
          <div className="bg-primary rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <ICONS.FileText size={32} />
                </div>
              </div>
              <h2 className="text-xl font-bold leading-tight mb-2">Upload documents to start earning</h2>
              <p className="text-white/80 text-sm mb-4">Complete your profile and verify your details to get on the road with Vovo.</p>
              <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                Get Started
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="px-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Onboarding Steps</h3>
          <div className="flex overflow-x-auto gap-3 px-4 pb-2 no-scrollbar">
            {[
              { label: 'Learn to Upload', icon: ICONS.BookOpen },
              { label: 'Questions & Support', icon: ICONS.MessagesSquare },
              { label: 'Why Vovo Benefits', icon: ICONS.Info },
              { label: 'Earnings Potential', icon: ICONS.TrendingUp },
            ].map((step, i) => (
              <div key={i} className="flex-none w-32 bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/10 shadow-sm">
                <step.icon size={20} className="text-primary mb-2" />
                <p className="text-xs font-bold leading-tight">{step.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Required Documents</h3>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-green-500 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <ICONS.Bike size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold">Vehicle - Bike</p>
                <p className="text-xs text-green-600 font-medium">Completed</p>
              </div>
            </div>
            <ICONS.BadgeCheck size={20} className="text-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-primary shadow-sm ring-2 ring-primary/20">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <ICONS.FileText size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-bold">Driving License</p>
                <p className="text-xs text-primary font-medium italic">Pending Upload</p>
              </div>
            </div>
            <ICONS.ChevronRight size={20} className="text-primary" />
          </div>
          {[
            { label: 'Photo and Name', icon: ICONS.User },
            { label: 'Vehicle Number', icon: ICONS.MapPin || ICONS.Info },
            { label: 'Aadhaar or PAN card', icon: ICONS.CreditCard },
          ].map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 opacity-60">
              <div className="flex items-center gap-4">
                <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg">
                  <doc.icon size={20} className="text-slate-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-500">{doc.label}</p>
                  <p className="text-xs text-slate-400">Locked</p>
                </div>
              </div>
              <ICONS.Lock size={20} className="text-slate-400" />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

const ActivityScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const rides = [
    { id: '1', title: 'Trip to Downtown', date: 'Oct 24, 10:30 AM', price: '₹150.00', status: 'Completed', icon: ICONS.Bike },
    { id: '2', title: 'Airport Drop', date: 'Oct 22, 08:15 PM', price: '₹850.00', status: 'Completed', icon: ICONS.Car },
    { id: '3', title: 'Office Commute', date: 'Oct 21, 09:00 AM', price: '₹120.00', status: 'Completed', icon: ICONS.Bike },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 bg-white dark:bg-background-dark p-4 border-b border-primary/10">
        <h2 className="text-xl font-bold text-center">Your Activity</h2>
      </header>
      <main className="p-4 space-y-4">
        {rides.map((ride) => (
          <div 
            key={ride.id} 
            onClick={() => setScreen('ride-details')}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary/5 flex items-center gap-4 cursor-pointer hover:bg-primary/5 transition-colors"
          >
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <ride.icon size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold">{ride.title}</h4>
              <p className="text-xs text-slate-500">{ride.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">{ride.price}</p>
              <p className="text-[10px] text-green-600 font-bold uppercase">{ride.status}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

const WalletScreen = () => {
  return (
    <div className="flex flex-col min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 bg-white dark:bg-background-dark p-4 border-b border-primary/10">
        <h2 className="text-xl font-bold text-center">Vovo Wallet</h2>
      </header>
      <main className="p-4 space-y-6">
        <div className="bg-primary rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white/70 text-sm font-medium mb-1">Total Balance</p>
            <h3 className="text-4xl font-bold">₹1,240.50</h3>
            <div className="mt-8 flex gap-3">
              <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm">+ Add Money</button>
              <button className="bg-white/20 text-white px-6 py-2 rounded-lg font-bold text-sm">Send</button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <section>
          <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {[
              { title: 'Ride Payment', date: 'Today, 10:30 AM', amount: '-₹96.00', icon: ICONS.Car },
              { title: 'Added to Wallet', date: 'Yesterday, 04:15 PM', amount: '+₹500.00', icon: ICONS.Wallet, positive: true },
              { title: 'Ride Payment', date: '24 Oct, 08:30 PM', amount: '-₹150.00', icon: ICONS.Bike },
            ].map((tx, i) => (
              <div key={i} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-primary/5">
                <div className="p-2 bg-primary/5 rounded-lg text-primary">
                  <tx.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{tx.title}</p>
                  <p className="text-xs text-slate-500">{tx.date}</p>
                </div>
                <p className={`font-bold ${tx.positive ? 'text-green-600' : 'text-slate-900 dark:text-slate-100'}`}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (screen) {
      case 'home': return <HomeScreen setScreen={setScreen} />;
      case 'activity': return <ActivityScreen setScreen={setScreen} />;
      case 'wallet': return <WalletScreen />;
      case 'ride-selection': return <RideSelectionScreen setScreen={setScreen} />;
      case 'profile': return <ProfileScreen setScreen={setScreen} />;
      case 'ride-details': return <RideDetailsScreen setScreen={setScreen} />;
      case 'settings': return <SettingsScreen setScreen={setScreen} />;
      case 'help-center': return <HelpCenterScreen setScreen={setScreen} />;
      case 'document-centre': return <DocumentCentreScreen setScreen={setScreen} />;
      default: return <HomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-background-dark min-h-screen shadow-2xl relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
      
      {['home', 'activity', 'wallet', 'profile', 'help-center', 'document-centre'].includes(screen) && (
        <NavBar currentScreen={screen} setScreen={setScreen} />
      )}
    </div>
  );
}
