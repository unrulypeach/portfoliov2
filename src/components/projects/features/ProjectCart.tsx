import shoppingcart_phone from 'assets/project-screenshots/edited_shopping-cart_mobile_3shot.png';

import { react, tailwindcss, reactrouter, newtab } from 'assets/icons';

function ProjectCart() {
  return (
    <div
      className="flex flex-col items-center h-screen py-24 snap-center
                  desktop:flex-row"
    >
      <div className="flex-1 desktop:order-2">
        <img
          className="max-h-[50vh] desktop:max-h-none desktop:max-w-[40vw]"
          src={shoppingcart_phone}
          alt="3 cellphone shaped images of a site's shopping cart, store, and item"
        />
      </div>

      <div className="flex flex-col px-8 self-center flex-1 desktop:items-end desktop:pr-16">
        <h3 className="title">Shopping Cart</h3>
        <div className="flex flex-wrap pt-4">
          <div className="badge-styled">
            {react}
            <span className="text-texthov">react</span>
          </div>
          <div className="badge-styled">
            {reactrouter}
            <span className="text-texthov">react router</span>
          </div>
          <div className="badge-styled">
            {tailwindcss}
            <span className="text-texthov">tailwindcss</span>
          </div>
        </div>
        <div className="py-4 max-w-[600px] text-texthov desktop:text-right">
          A casette store made with React and tailwindcss with routing handled by React Router.
          Users can add and delete items to their cart and continue shopping.
        </div>
        <div className="py-4 flex justify-between desktop:justify-start">
          <a className="btn-newpg px-6 group" href="https://unrulypeach.github.io/shopping-cart/">
            Live Demo{newtab}
          </a>
          <a
            className="px-6 ml-2 btn-newpg desktop:ml-4 group"
            href="https://github.com/unrulypeach/shopping-cart"
          >
            Repo {newtab}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCart;
