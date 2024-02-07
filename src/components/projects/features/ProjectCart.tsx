import shoppingcart_phone from 'assets/project-screenshots/edited_shopping-cart_mobile_3shot.png';

import { react, tailwindcss, reactrouter, newtab } from 'assets/icons';

function ProjectCart() {
  return (
    <div className="flex my-40">
      <div className="flex flex-col px-8 self-center flex-1">
        <h3 className="title">Shopping Cart</h3>
        <div className="flex flex-wrap py-4">
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {react}
            <span className="text-icon">react</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {reactrouter}
            <span className="text-icon">react router</span>
          </div>
          <div className="badge gap-2 h-6 mr-2 bg-iconbg">
            {tailwindcss}
            <span className="text-icon">tailwindcss</span>
          </div>
        </div>
        <div className="py-4 max-w-[700px]">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isnt anything embarrassing hidden in the middle of text.
        </div>
        <div className="py-4">
          <a className="btn btn-sm h-10 px-8" href="https://unrulypeach.github.io/shopping-cart/">
            Live Demo{newtab}
          </a>
          <a
            className="ml-4 px-10 btn btn-sm h-10"
            href="https://github.com/unrulypeach/shopping-cart"
          >
            Repo {newtab}
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img className="max-w-[40vw]" src={shoppingcart_phone} alt="" />
      </div>
    </div>
  );
}

export default ProjectCart;
