import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <form className="pt-24 px-20 flex-1">
      <div className="max-w-[30vw] flex flex-col">
        <div className="py-4 px-0">
          <div className="group border border-borderGrey rounded-[4px] focus-within:outline focus-within:outline-blue-300 focus-within:outline-[2px]">
            <label className="">
              <div className="flex flex-row absolute">
                {name.length > 0 ? (
                  <div className="input-name-text-signup">
                    <span>Name</span>
                  </div>
                ) : (
                  <div className="input-name-signup">
                    <span>Name</span>
                  </div>
                )}
              </div>
              <div className="pt-6 bg-[#1d232a]">
                <input
                  type="text"
                  className="input-text"
                  maxLength={50}
                  placeholder=" "
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="py-4 px-0">
          <div className="group border border-borderGrey rounded-[4px] focus-within:outline focus-within:outline-blue-300 focus-within:outline-[2px]">
            <label className="">
              <div className="flex flex-row absolute">
                {email.length > 0 ? (
                  <div className="input-name-text-signup">
                    <span>Email</span>
                  </div>
                ) : (
                  <div className="input-name-signup">
                    <span>Email</span>
                  </div>
                )}
              </div>
              <div className="pt-6 bg-[#1d232a]">
                <input
                  type="text"
                  className="input-text"
                  maxLength={50}
                  placeholder=" "
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="py-4 px-0">
          <div className="group border border-borderGrey rounded-[4px] focus-within:outline focus-within:outline-blue-300 focus-within:outline-[2px]">
            <label className="">
              <div className="flex flex-row absolute">
                {msg.length > 0 ? (
                  <div className="input-name-text-signup">
                    <span>Message</span>
                  </div>
                ) : (
                  <div className="input-name-signup">
                    <span>Message</span>
                  </div>
                )}
              </div>
              <div className="pt-6 bg-[#1d232a]">
                <textarea
                  className="input-textarea"
                  maxLength={50}
                  placeholder=" "
                  required
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
        </div>
        <button className="mt-4 btn w-full">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
