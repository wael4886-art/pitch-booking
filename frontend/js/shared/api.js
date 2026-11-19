// Front-End mock API: replace these mock functions only if a backend is added later.
window.MockAPI = {
  pitches: [
    {id:1,name:"ملعب النجوم",location:"بنغازي",price:120,size:"5x5",rating:4.8,photo:"",slots:["16:00","17:00","18:00"]},
    {id:2,name:"Arena Sport",location:"طرابلس",price:150,size:"7x7",rating:4.6,photo:"",slots:["17:00","19:00","20:00"]},
    {id:3,name:"ملعب الأبطال",location:"بنغازي",price:100,size:"5x5",rating:4.5,photo:"",slots:["15:00","18:00","20:00"]}
  ],
  bookings: [
    {id:"PB-1024",pitch:"ملعب النجوم",date:"2026-11-22",time:"18:00",status:"مؤكد",price:120},
    {id:"PB-1025",pitch:"Arena Sport",date:"2026-11-24",time:"20:00",status:"قيد المراجعة",price:150}
  ],
  users: [
    {name:"أحمد",role:"player",email:"ahmed@example.com"},
    {name:"محمد",role:"owner",email:"owner@example.com"},
    {name:"مدير النظام",role:"admin",email:"admin@example.com"}
  ],
  getPitches(){return this.pitches},
  getBookings(){return this.bookings},
  getUsers(){return this.users}
};