export const services = [
 {name:'Signature Haircut',price:45,duration:45,category:'Cuts & grooming',description:'A considered cut, tailored to your texture and everyday routine.'},
 {name:'Skin Fade',price:50,duration:45,category:'Cuts & grooming',description:'Seamless blending, clean edges, and a sharp finish.'},
 {name:'Haircut and Beard',price:65,duration:60,category:'Cuts & grooming',description:'A fresh cut and a shaped beard, brought into balance.'},
 {name:'Beard Detail',price:25,duration:30,category:'Cuts & grooming',description:'Thoughtful shaping, tidy lines, and a conditioning finish.'},
 {name:'Kids’ Cut',price:35,duration:30,category:'Cuts & grooming',description:'An easygoing appointment for the next generation of good hair.'},
 {name:'Women’s Haircut',price:65,duration:60,category:'Color & styling',description:'Shape, movement, and a finish that feels like you.'},
 {name:'Blowout and Style',price:55,duration:45,category:'Color & styling',description:'A fresh wash and a polished finish, from sleek to full of volume.'},
 {name:'All-Over Color',price:120,duration:120,category:'Color & styling',description:'Rich, even color with a personal consultation before we begin.'},
 {name:'Highlights',price:160,duration:180,category:'Color & styling',description:'Soft dimension and thoughtfully placed brightness.'},
 {name:'Event Styling',price:95,duration:90,category:'Color & styling',description:'A look for your occasion, with a little extra staying power.'},
];
export const artists=[
 {name:'Maya Torres',first:'Maya',image:'maya',specialty:'Cuts & lived-in color',bio:'Soft dimension, thoughtful shapes. Maya’s approach starts with listening and ends with hair that works beyond the studio.',services:[0,4,5,7,8]},
 {name:'Nico Reyes',first:'Nico',image:'nico',specialty:'Fades & men’s grooming',bio:'A detail person through and through. Nico brings a steady hand to clean fades, textured cuts, and well-balanced beards.',services:[0,1,2,3,4]},
 {name:'Jordan Lee',first:'Jordan',image:'jordan',specialty:'Styling & textured hair',bio:'Movement, natural texture, and a little individuality. Jordan helps you find a style that feels effortless and entirely your own.',services:[0,4,5,6,9]},
];
export const works=[
 {image:'hero',category:'Styling',title:'Soft movement',detail:'Loose waves · a little undone',alt:'Softly waved, shoulder-length blonde hair with natural movement'},
 {image:'cut',category:'Fades',title:'Clean lines',detail:'Precision grooming · fresh perspective',alt:'A barber creating a detailed short haircut'},
 {image:'color',category:'Cuts',title:'Texture, celebrated',detail:'Natural shape · beautiful volume',alt:'A woman with voluminous natural textured hair'},
 {image:'curls',category:'Color',title:'Lived-in light',detail:'Warm blonde · sunlit dimension',alt:'Sunlit blonde hair with soft, natural-looking dimension'},
 {image:'styling',category:'Styling',title:'The finishing touch',detail:'A considered shape · styled your way',alt:'A stylist blow-drying a client’s hair in a bright salon'},
 {image:'fade',category:'Fades',title:'A sharper detail',detail:'Beard grooming · thoughtfully finished',alt:'A barber carefully grooming a client’s beard'},
];
export const faqs=[
 ['Do you accept walk-ins?','In our studio concept, walk-ins are welcome when an artist has an opening. Booking ahead is the best way to get your preferred time and artist.'],
 ['How should I prepare for a color appointment?','Bring a few inspiration photos and tell your artist about recent color or chemical treatments. Avoid heavy styling products, and share any sensitivities during your consultation.'],
 ['What is your cancellation policy?','Our illustrative policy asks for at least 24 hours’ notice to cancel or reschedule. This demo does not take deposits, charge fees, or create real appointments.'],
 ['Can I choose my stylist?','Absolutely. Choose your preferred artist in the booking form, or select “Any available artist” and we’ll match you to the service.'],
 ['Do you work with curly and textured hair?','Yes—our concept includes services for a range of curls, coils, and textures. Share your routine and goals in the booking notes so your consultation can start in the right place.'],
 ['Is a consultation required for major color services?','Yes. Significant color changes and color corrections begin with a consultation to discuss hair history, timing, upkeep, and a tailored quote. Choose a color service and describe your plans in the notes.'],
];
export const imagePath=(name:string)=>`/demos/forma/images/forma/${name}.jpg`;
