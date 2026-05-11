"use client"

export default function LocateUsMapSection() {
  return (
    <section className="py- bg-white font-figtree">
      <div className="container mx-auto px-4 py-20">
        <div className="text-left mb-10">
          <h2 className="text-4xl font-bold text-center  mb-2  ">LOCATE US ON</h2>
          <h2 className="text-5xl font-bold text-center text-[#d6d61d] ">MAPS</h2>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6886.712200512204!2d77.954389!3d30.340828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d5612204efb7%3A0x5eef311e57b07271!2sUttaranchal%20University!5e0!3m2!1sen!2sin!4v1743768710147!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Uttaranchal University Location Map"
              aria-label="Google Maps showing the location of Uttaranchal University"
            />
          </div>
        </div>
      </div>
    </section>
  )
}