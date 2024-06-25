function Connection() {
  return (
    <section className="relative w-full top-[22rem] h-[38rem] flex flex-col bg-gradient-to-b gap-6 from-[#0F0417] to-black pt-24 md:top-[29rem]">
      <div className="flex justify-evenly gap-20 sm:flex-col sm:ml-[25%] xlsm:ml-[10%]">
        <article className="flex flex-col text-white text-[1.25rem]">
          <h3 className="text-[1.25rem] text-h-teal mb-2 [text-shadow:0px_2px_4px_#00F0FF]">
            Cím
          </h3>
          <div className="[text-shadow:0px_1px_4px_#ffffff]">
            <p>1214 Budapest Hő utca 49b.</p>
            <p>vrsziget@gmail.com</p>
            <p>+36 20 236 9727</p>
          </div>
        </article>

        <article className="flex flex-col text-white text-[1.25rem]">
          <h3 className="text-[1.25rem] text-h-teal mb-2 [text-shadow:0px_2px_4px_#00F0FF]">
            Nyitva tartás
          </h3>
          <div className="[text-shadow:0px_1px_4px_#ffffff]">
            <p>H - P: 15:00 - 20:00</p>
            <p>SZ: 10:00 - 22:00</p>
            <p>V: 10:00 - 20:00</p>
          </div>
        </article>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.0402024863156!2d19.071351076784147!3d47.4111570014528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e7def4e4f3cb%3A0xe8b5310f7f01b8c1!2sBudapest%2C%20H%C5%91%20u.%2049b%2C%201214!5e0!3m2!1sen!2shu!4v1719230863405!5m2!1sen!2shu"
        className=" w-full h-96 invert"      
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Connection;
