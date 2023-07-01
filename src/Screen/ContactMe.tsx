function ContactMe() {
  return (
    <div className=" text-center max-w-2xl mx-auto">
      <p className=" text-md md:text-3xl font-bold uppercase">
        let's make your dream come true
      </p>
      <p className=" text-sm md:text-md mt-3 max-w-sm md:max-w-3xl mx-auto">
        Feel free to contact me. there are many creative ideas that we can make
        happen so what are you waiting for, let's discuss it
      </p>
      <button
        className="btn mt-5"
        onClick={() => (window.location.href = "https://wa.me/081213221343")}
      >
        Get in Touch
      </button>
    </div>
  );
}

export default ContactMe;
