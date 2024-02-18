import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

//font weight regular
function Title() {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  async function myAnimation1() {
    await animate(
      '#stop11',
      { stopColor: 'rgba(237, 235, 225, 0.5)' },
      {
        ease: 'linear',
        duration: 1,
      }
    );
    await animate(
      scope.current,
      { fx: 0.9, fy: 0.5 },
      {
        ease: 'easeInOut',
        duration: 0.75,
      }
    );
    await animate(
      scope.current,
      { fx: 0.01, fy: 0.08 },
      {
        ease: 'easeInOut',
        duration: 0.75,
      }
    );
    await animate(
      scope.current,
      { fx: 0.99 },
      {
        ease: 'easeInOut',
        duration: 2,
      }
    );
    await animate(
      scope.current,
      { fx: 0.01, fy: 0.5 },
      {
        ease: 'easeInOut',
        duration: 0.3,
      }
    );
    await animate(
      scope.current,
      { fx: 0.99 },
      {
        ease: 'easeInOut',
        duration: 2,
      }
    );
    await animate(
      scope.current,
      { fx: 0.01, fy: 0.9 },
      {
        ease: 'easeInOut',
        duration: 0.3,
      }
    );
    await animate(
      scope.current,
      { fx: 0.99 },
      {
        ease: 'easeInOut',
        duration: 2,
      }
    );
    await animate(
      scope.current,
      { fx: 0.01, fy: 0.1 },
      {
        ease: 'easeInOut',
        duration: 1,
      }
    );
    await Promise.all([
      animate(
        '#stop12',
        { offset: '95%' },
        {
          ease: 'easeInOut',
          duration: 2,
        }
      ),
      animate(
        '#stop11',
        { stopColor: 'rgba(237, 235, 225, 0.7)' },
        {
          ease: 'linear',
          duration: 2,
        }
      ),
      animate(
        scope.current,
        { fr: 0.1, fx: 0.3, fy: 0.5 },
        {
          ease: 'linear',
          duration: 5,
        }
      ),
    ]);
  }

  async function myAnimation2() {
    await animate2(
      '#stop21',
      { stopColor: 'rgba(237, 235, 225, 0.5)' },
      {
        ease: 'linear',
        duration: 1,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.1, fy: 0.7 },
      {
        ease: 'easeInOut',
        duration: 0.5,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.9, fy: 0.3 },
      {
        ease: 'easeInOut',
        duration: 0.5,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.01, fy: 0.08 },
      {
        ease: 'easeInOut',
        duration: 0.5,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.99 },
      {
        ease: 'easeInOut',
        duration: 2,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.01, fy: 0.5 },
      {
        ease: 'easeInOut',
        duration: 0.3,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.99 },
      {
        ease: 'easeInOut',
        duration: 2,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.01, fy: 0.9 },
      {
        ease: 'easeInOut',
        duration: 0.3,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.99 },
      {
        ease: 'easeInOut',
        duration: 2,
      }
    );
    await animate2(
      scope2.current,
      { fx: 0.99, fy: 0.1 },
      {
        ease: 'easeInOut',
        duration: 1,
      }
    );
    await Promise.all([
      animate2(
        '#stop22',
        { offset: '95%' },
        {
          ease: 'easeInOut',
          duration: 2,
        }
      ),
      animate2(
        '#stop21',
        { stopColor: 'rgba(237, 235, 225, 0.7)' },
        {
          ease: 'linear',
          duration: 2,
        }
      ),
      animate2(
        scope2.current,
        { fr: 0.1, fx: 0.7, fy: 0.5 },
        {
          ease: 'linear',
          duration: 5,
        }
      ),
    ]);
  }

  useEffect(() => {
    myAnimation1();
    myAnimation2();
  }, []);

  return (
    <div className="flex flex-col justify-center h-[inherit] text-[#b7c7e8] stroke-icon text-8xl font-bold px-[10%] desktopLg:px-[20%]">
      {/* LINDA CHEN */}

      <motion.svg
        className="my-10"
        width="100%"
        height="100%"
        viewBox="0 0 887.5 116.88"
        xmlns="http://www.w3.org/2000/motion.svg"
      >
        <defs>
          {/* <motion.radialGradient ref={scope} id="gradient1" fx={0.1} fy={0.9} fr={0.05} r={0.75}> */}
          <motion.radialGradient
            ref={scope}
            id="gradient1"
            initial={{ fx: '0.1', fy: '0.9', fr: '0.05', r: '0.75' }}
          >
            <stop id="stop11" offset="5%" stopColor="rgba(237, 235, 225, 0)" />
            <stop id="stop12" offset="35%" stopColor="rgba(0,0,0,0)" />
          </motion.radialGradient>
          <motion.radialGradient ref={scope2} id="gradient2" fx={0.9} fy={0.9} fr={0.05} r={0.75}>
            <stop id="stop21" offset="5%" stopColor="rgba(237, 235, 225, 0)" />
            <stop id="stop22" offset="35%" stopColor="rgba(0,0,0,0)" />
          </motion.radialGradient>
        </defs>

        <path
          fill="url(#gradient1)"
          strokeWidth={'0mm'}
          d="M 169.219 370.47 L 169.219 382.736 L 119.922 382.736 L 119.922 423.048 L 177.188 423.048 L 177.188 435.314 L 104.922 435.314 L 104.922 321.564 L 176.406 321.564 L 176.406 333.908 L 119.922 333.908 L 119.922 370.47 L 169.219 370.47 Z M 361.953 370.47 L 361.953 382.736 L 312.656 382.736 L 312.656 423.048 L 369.922 423.048 L 369.922 435.314 L 297.656 435.314 L 297.656 321.564 L 369.141 321.564 L 369.141 333.908 L 312.656 333.908 L 312.656 370.47 L 361.953 370.47 Z M 744.844 370.47 L 744.844 382.736 L 695.547 382.736 L 695.547 423.048 L 752.813 423.048 L 752.813 435.314 L 680.547 435.314 L 680.547 321.564 L 752.031 321.564 L 752.031 333.908 L 695.547 333.908 L 695.547 370.47 L 744.844 370.47 Z M 201.172 321.564 L 233.516 415.392 L 266.016 321.564 L 282.422 321.564 L 240.234 435.314 L 226.953 435.314 L 184.844 321.564 L 201.172 321.564 Z M 837.891 435.314 L 813.203 389.298 L 786.484 389.298 L 786.484 435.314 L 771.406 435.314 L 771.406 321.564 L 809.063 321.564 A 67.714 67.714 0 0 1 820.465 322.462 Q 831.597 324.367 838.633 330.314 A 28.234 28.234 0 0 1 847.973 346.112 A 43.603 43.603 0 0 1 848.984 355.783 A 33.13 33.13 0 0 1 847.364 366.3 A 29.156 29.156 0 0 1 843.242 374.298 Q 837.5 382.189 827.266 386.095 L 853.984 434.376 L 853.984 435.314 L 837.891 435.314 Z M 403.672 321.564 L 403.672 423.048 L 457.578 423.048 L 457.578 435.314 L 388.594 435.314 L 388.594 321.564 L 403.672 321.564 Z M 621.406 390.783 L 594.609 390.783 L 594.609 435.314 L 579.609 435.314 L 579.609 321.564 L 621.563 321.564 A 58.939 58.939 0 0 1 633.382 322.677 Q 643.853 324.822 650.82 331.095 A 31.498 31.498 0 0 1 661.261 352.734 A 43.563 43.563 0 0 1 661.406 356.329 A 42.358 42.358 0 0 1 660.183 366.816 A 28.703 28.703 0 0 1 651.055 381.837 A 33.737 33.737 0 0 1 638.957 388.395 Q 631.375 390.783 621.406 390.783 Z M 31.484 435.314 L 0 435.314 L 0 321.564 L 32.109 321.564 Q 46.953 321.564 58.359 328.126 Q 69.766 334.689 75.977 346.798 A 56.714 56.714 0 0 1 81.61 365.09 A 72.405 72.405 0 0 1 82.266 374.611 L 82.266 381.876 A 70.811 70.811 0 0 1 80.901 396.089 A 54.384 54.384 0 0 1 76.055 410.079 A 43.688 43.688 0 0 1 58.32 428.673 Q 46.797 435.158 31.484 435.314 Z M 557.109 374.923 L 557.109 382.111 A 84.063 84.063 0 0 1 555.954 396.388 A 61.428 61.428 0 0 1 551.484 411.29 A 47.073 47.073 0 0 1 544.437 422.573 A 39.568 39.568 0 0 1 535.547 430.314 A 41.988 41.988 0 0 1 517.437 436.551 A 53.211 53.211 0 0 1 511.484 436.876 A 46.539 46.539 0 0 1 497.148 434.729 A 41.117 41.117 0 0 1 487.656 430.275 A 42.517 42.517 0 0 1 473.431 415.13 A 52.502 52.502 0 0 1 471.523 411.447 A 60.914 60.914 0 0 1 466.599 395.109 A 80.613 80.613 0 0 1 465.625 383.126 L 465.625 374.923 A 80.349 80.349 0 0 1 466.963 359.928 A 61.534 61.534 0 0 1 471.328 345.939 A 47.804 47.804 0 0 1 478.594 334.387 A 40.445 40.445 0 0 1 487.461 326.681 A 42.476 42.476 0 0 1 508.016 320.106 A 51.915 51.915 0 0 1 511.328 320.001 A 48.029 48.029 0 0 1 525.126 321.92 A 41.202 41.202 0 0 1 535.43 326.603 Q 545.859 333.204 551.484 345.743 A 62.659 62.659 0 0 1 556.108 361.613 A 84.679 84.679 0 0 1 557.109 374.923 Z M 32.5 333.908 L 15 333.908 L 15 423.048 L 30.781 423.048 A 44.788 44.788 0 0 0 42.025 421.716 A 31.066 31.066 0 0 0 57.773 412.267 Q 67.422 401.486 67.422 381.564 L 67.422 374.923 A 66.419 66.419 0 0 0 66.442 363.138 Q 65.254 356.56 62.628 351.348 A 33.136 33.136 0 0 0 58.32 344.806 A 29.983 29.983 0 0 0 40.614 334.692 A 44.422 44.422 0 0 0 32.5 333.908 Z M 542.188 383.204 L 542.188 374.767 Q 542.188 361.488 538.688 352.264 A 34.552 34.552 0 0 0 534.063 343.712 A 26.136 26.136 0 0 0 514.933 333.066 A 36.352 36.352 0 0 0 511.328 332.892 A 29.93 29.93 0 0 0 500.775 334.678 A 26.131 26.131 0 0 0 488.945 343.712 Q 482.456 352.314 480.977 366.222 A 80.55 80.55 0 0 0 480.547 373.751 L 480.547 382.111 A 75.635 75.635 0 0 0 481.434 394.075 Q 482.456 400.445 484.656 405.615 A 36.251 36.251 0 0 0 488.789 412.931 A 26.162 26.162 0 0 0 507.755 423.944 A 34.329 34.329 0 0 0 511.484 424.142 A 31.817 31.817 0 0 0 521.413 422.669 A 25.294 25.294 0 0 0 533.984 413.556 A 35.865 35.865 0 0 0 539.331 402.99 Q 540.926 398.093 541.632 392.141 A 84.396 84.396 0 0 0 542.187 383.204 Z M 594.609 333.908 L 594.609 378.517 L 621.563 378.517 A 41.115 41.115 0 0 0 628.533 377.964 Q 632.395 377.298 635.463 375.832 A 19.498 19.498 0 0 0 640 372.853 A 18.274 18.274 0 0 0 645.649 363.249 Q 646.383 360.261 646.406 356.715 A 35.496 35.496 0 0 0 646.406 356.486 A 26.061 26.061 0 0 0 645.448 349.238 A 19.765 19.765 0 0 0 640 340.236 A 21.956 21.956 0 0 0 630.423 334.985 Q 627.07 334.076 623.099 333.927 A 41.129 41.129 0 0 0 622.422 333.908 L 594.609 333.908 Z M 786.484 333.908 L 786.484 377.033 L 809.531 377.033 Q 819.133 377.033 825.359 372.762 A 20.865 20.865 0 0 0 827.305 371.251 A 19.002 19.002 0 0 0 833.803 358.143 A 26.421 26.421 0 0 0 833.906 355.783 A 28.242 28.242 0 0 0 833.197 349.252 Q 831.794 343.346 827.617 339.611 A 20.478 20.478 0 0 0 820.214 335.463 Q 817.17 334.469 813.487 334.11 A 44.624 44.624 0 0 0 809.453 333.908 L 786.484 333.908 Z
            M 483.984 194.455 L 468.906 194.455 Q 468.906 184.142 462.344 178.244 Q 456.612 173.092 446.768 172.44 A 44.487 44.487 0 0 0 443.828 172.345 Q 435.995 172.345 430.597 174.78 A 19.575 19.575 0 0 0 426.523 177.228 A 15.866 15.866 0 0 0 420.392 188.867 A 22.527 22.527 0 0 0 420.313 190.783 Q 420.313 197.736 426.211 202.541 A 27.769 27.769 0 0 0 430.443 205.321 Q 435.011 207.814 442.052 210.062 A 126.226 126.226 0 0 0 446.289 211.33 Q 455.556 213.934 462.187 216.888 A 58.612 58.612 0 0 1 468.477 220.119 A 41.627 41.627 0 0 1 474.496 224.458 Q 477.875 227.416 480.049 230.84 A 25.769 25.769 0 0 1 480.352 231.33 A 26.638 26.638 0 0 1 483.841 241.209 A 34.63 34.63 0 0 1 484.219 246.408 A 28.547 28.547 0 0 1 482.043 257.72 Q 479.376 263.974 473.438 268.556 A 37.663 37.663 0 0 1 460.046 275.018 Q 454.65 276.47 448.264 276.788 A 73.57 73.57 0 0 1 444.609 276.877 Q 432.891 276.877 422.734 272.384 A 42.361 42.361 0 0 1 414.234 267.443 A 33.307 33.307 0 0 1 407.07 260.08 A 30.028 30.028 0 0 1 401.562 242.345 L 416.641 242.345 A 22.416 22.416 0 0 0 417.874 249.942 A 19.086 19.086 0 0 0 424.258 258.634 A 26.467 26.467 0 0 0 433.795 263.298 Q 437.58 264.324 442.052 264.548 A 51.03 51.03 0 0 0 444.609 264.611 A 46.714 46.714 0 0 0 451.49 264.138 Q 454.976 263.618 457.806 262.525 A 20.066 20.066 0 0 0 462.813 259.767 Q 469.141 254.924 469.141 246.564 Q 469.141 238.205 463.281 233.634 Q 458.587 229.973 447.775 226.387 A 156.037 156.037 0 0 0 442.031 224.611 Q 423.927 219.407 415.072 211.968 A 33.289 33.289 0 0 1 413.945 210.978 A 26.666 26.666 0 0 1 406.779 200.523 A 27.276 27.276 0 0 1 405.156 191.017 A 27.189 27.189 0 0 1 413.978 170.48 A 35.143 35.143 0 0 1 415.898 168.791 A 37.699 37.699 0 0 1 431.729 161.264 A 54.882 54.882 0 0 1 443.828 160.002 A 51.784 51.784 0 0 1 455.563 161.281 A 42.165 42.165 0 0 1 464.727 164.533 A 36.454 36.454 0 0 1 474.168 171.126 A 32.608 32.608 0 0 1 478.945 177.033 A 31.963 31.963 0 0 1 483.984 194.455 Z M 869.609 275.314 L 829.297 222.424 L 815.391 236.877 L 815.391 275.314 L 800.391 275.314 L 800.391 161.564 L 815.391 161.564 L 815.391 217.814 L 865.938 161.564 L 884.063 161.564 L 839.297 211.799 L 887.578 275.314 L 869.609 275.314 Z M 153.438 161.564 L 168.516 161.564 L 168.516 238.908 A 42.343 42.343 0 0 1 166.685 251.418 A 33.98 33.98 0 0 1 158.398 265.236 Q 148.359 275.47 131.172 276.72 L 127.188 276.877 Q 108.516 276.877 97.422 266.799 A 33.554 33.554 0 0 1 86.934 247.419 A 48.68 48.68 0 0 1 86.172 239.064 L 86.172 161.564 L 101.016 161.564 L 101.016 238.595 A 35.996 35.996 0 0 0 101.801 246.349 Q 102.92 251.426 105.638 255.208 A 21.075 21.075 0 0 0 107.812 257.775 A 22.005 22.005 0 0 0 117.604 263.394 Q 121.881 264.611 127.188 264.611 A 38.126 38.126 0 0 0 134.859 263.888 Q 142.126 262.394 146.68 257.814 A 22.174 22.174 0 0 0 152.322 247.787 Q 153.281 244.265 153.415 240.066 A 43.397 43.397 0 0 0 153.437 238.674 L 153.438 161.564 Z M 764.844 239.22 L 779.922 239.22 A 53.626 53.626 0 0 1 777.06 251.597 A 37.317 37.317 0 0 1 766.602 267.072 A 38.343 38.343 0 0 1 749.828 275.469 Q 744.029 276.833 737.236 276.875 A 70.021 70.021 0 0 1 736.797 276.877 A 45.392 45.392 0 0 1 721.346 274.352 A 39.003 39.003 0 0 1 704.492 262.424 Q 692.984 248.733 692.378 226.279 A 93.543 93.543 0 0 1 692.344 223.752 L 692.344 212.814 A 75.572 75.572 0 0 1 693.588 198.787 A 57.4 57.4 0 0 1 698.008 184.924 A 45.14 45.14 0 0 1 706.104 172.914 A 40.175 40.175 0 0 1 714.062 166.447 A 42.929 42.929 0 0 1 732.301 160.31 A 53.81 53.81 0 0 1 738.125 160.002 A 52.657 52.657 0 0 1 750.678 161.417 A 36.72 36.72 0 0 1 767.188 170.119 A 38.405 38.405 0 0 1 777.759 187.223 A 54.863 54.863 0 0 1 779.922 198.127 L 764.844 198.127 Q 762.891 184.533 756.367 178.439 Q 750.401 172.866 740.09 172.39 A 42.594 42.594 0 0 0 738.125 172.345 A 31.163 31.163 0 0 0 727.842 173.967 A 26.005 26.005 0 0 0 715.586 182.97 A 35.355 35.355 0 0 0 710.005 193.987 Q 707.422 202.175 707.422 213.205 L 707.422 224.22 A 71.902 71.902 0 0 0 708.336 236.054 Q 709.399 242.417 711.699 247.568 A 35.876 35.876 0 0 0 715.156 253.674 A 24.536 24.536 0 0 0 732.906 264.383 A 32.256 32.256 0 0 0 736.797 264.611 A 44.387 44.387 0 0 0 744.041 264.058 Q 747.942 263.411 751.067 262.009 A 20.538 20.538 0 0 0 755.977 258.947 A 20.046 20.046 0 0 0 760.51 253.24 Q 763.417 247.96 764.759 239.753 A 69.632 69.632 0 0 0 764.844 239.22 Z M 62.734 212.814 L 62.734 225.08 L 15 225.08 L 15 275.314 L 0 275.314 L 0 161.564 L 70.469 161.564 L 70.469 173.908 L 15 173.908 L 15 212.814 L 62.734 212.814 Z M 582.031 161.564 L 582.031 173.908 L 545.469 173.908 L 545.469 275.314 L 530.547 275.314 L 530.547 173.908 L 494.063 173.908 L 494.063 161.564 L 582.031 161.564 Z M 666.406 275.314 L 655.547 245.627 L 607.891 245.627 L 597.188 275.314 L 581.719 275.314 L 625.156 161.564 L 638.281 161.564 L 681.797 275.314 L 666.406 275.314 Z M 207.266 161.564 L 207.266 263.049 L 261.172 263.049 L 261.172 275.314 L 192.188 275.314 L 192.188 161.564 L 207.266 161.564 Z M 293.359 161.564 L 293.359 263.049 L 347.266 263.049 L 347.266 275.314 L 278.281 275.314 L 278.281 161.564 L 293.359 161.564 Z M 631.719 180.08 L 612.422 233.283 L 651.094 233.283 L 631.719 180.08 Z M 392.188 221.095 L 392.188 232.892 L 354.063 232.892 L 354.063 221.095 L 392.188 221.095 Z
            M 217.031 1.564 L 217.031 115.314 L 201.953 115.314 L 144.688 27.658 L 144.688 115.314 L 129.609 115.314 L 129.609 1.564 L 144.688 1.564 L 202.109 89.611 L 202.109 1.564 L 217.031 1.564 Z M 887.5 1.564 L 887.5 115.314 L 872.422 115.314 L 815.156 27.658 L 815.156 115.314 L 800.078 115.314 L 800.078 1.564 L 815.156 1.564 L 872.578 89.611 L 872.578 1.564 L 887.5 1.564 Z M 682.5 1.564 L 682.5 115.314 L 667.422 115.314 L 667.422 62.736 L 610.078 62.736 L 610.078 115.314 L 595.078 115.314 L 595.078 1.564 L 610.078 1.564 L 610.078 50.47 L 667.422 50.47 L 667.422 1.564 L 682.5 1.564 Z M 773.438 50.47 L 773.438 62.736 L 724.141 62.736 L 724.141 103.049 L 781.406 103.049 L 781.406 115.314 L 709.141 115.314 L 709.141 1.564 L 780.625 1.564 L 780.625 13.908 L 724.141 13.908 L 724.141 50.47 L 773.438 50.47 Z M 559.531 79.22 L 574.609 79.22 A 53.626 53.626 0 0 1 571.747 91.597 A 37.317 37.317 0 0 1 561.289 107.072 A 38.343 38.343 0 0 1 544.515 115.469 Q 538.717 116.833 531.924 116.875 A 70.021 70.021 0 0 1 531.484 116.877 A 45.392 45.392 0 0 1 516.034 114.352 A 39.003 39.003 0 0 1 499.18 102.424 Q 487.672 88.733 487.065 66.279 A 93.543 93.543 0 0 1 487.031 63.752 L 487.031 52.814 A 75.572 75.572 0 0 1 488.276 38.787 A 57.4 57.4 0 0 1 492.695 24.924 A 45.14 45.14 0 0 1 500.791 12.914 A 40.175 40.175 0 0 1 508.75 6.447 A 42.929 42.929 0 0 1 526.988 0.31 A 53.81 53.81 0 0 1 532.813 0.002 A 52.657 52.657 0 0 1 545.365 1.417 A 36.72 36.72 0 0 1 561.875 10.119 A 38.405 38.405 0 0 1 572.446 27.223 A 54.863 54.863 0 0 1 574.609 38.127 L 559.531 38.127 Q 557.578 24.533 551.055 18.439 Q 545.089 12.866 534.777 12.39 A 42.594 42.594 0 0 0 532.813 12.345 A 31.163 31.163 0 0 0 522.53 13.967 A 26.005 26.005 0 0 0 510.273 22.97 A 35.355 35.355 0 0 0 504.693 33.987 Q 502.109 42.175 502.109 53.205 L 502.109 64.22 A 71.902 71.902 0 0 0 503.023 76.054 Q 504.087 82.417 506.387 87.568 A 35.876 35.876 0 0 0 509.844 93.674 A 24.536 24.536 0 0 0 527.594 104.383 A 32.256 32.256 0 0 0 531.484 104.611 A 44.387 44.387 0 0 0 538.728 104.058 Q 542.63 103.411 545.754 102.009 A 20.538 20.538 0 0 0 550.664 98.947 A 20.046 20.046 0 0 0 555.197 93.24 Q 558.104 87.96 559.446 79.753 A 69.632 69.632 0 0 0 559.531 79.22 Z M 420.625 115.314 L 409.766 85.627 L 362.109 85.627 L 351.406 115.314 L 335.938 115.314 L 379.375 1.564 L 392.5 1.564 L 436.016 115.314 L 420.625 115.314 Z M 15.078 1.564 L 15.078 103.049 L 68.984 103.049 L 68.984 115.314 L 0 115.314 L 0 1.564 L 15.078 1.564 Z M 275.156 115.314 L 243.672 115.314 L 243.672 1.564 L 275.781 1.564 Q 290.625 1.564 302.031 8.127 Q 313.438 14.689 319.648 26.799 A 56.714 56.714 0 0 1 325.282 45.091 A 72.405 72.405 0 0 1 325.938 54.611 L 325.938 61.877 A 70.811 70.811 0 0 1 324.573 76.089 A 54.384 54.384 0 0 1 319.727 90.08 A 43.688 43.688 0 0 1 301.992 108.674 Q 290.469 115.158 275.156 115.314 Z M 102.188 1.564 L 102.188 115.314 L 87.188 115.314 L 87.188 1.564 L 102.188 1.564 Z M 276.172 13.908 L 258.672 13.908 L 258.672 103.049 L 274.453 103.049 A 44.788 44.788 0 0 0 285.697 101.716 A 31.066 31.066 0 0 0 301.445 92.267 Q 311.094 81.486 311.094 61.564 L 311.094 54.924 A 66.419 66.419 0 0 0 310.114 43.138 Q 308.926 36.561 306.3 31.348 A 33.136 33.136 0 0 0 301.992 24.806 A 29.983 29.983 0 0 0 284.286 14.692 A 44.422 44.422 0 0 0 276.172 13.908 Z M 385.938 20.08 L 366.641 73.283 L 405.313 73.283 L 385.938 20.08 Z"
        />

        <path
          fill="url(#gradient2)"
          strokeWidth={'0mm'}
          d="M 169.219 370.47 L 169.219 382.736 L 119.922 382.736 L 119.922 423.048 L 177.188 423.048 L 177.188 435.314 L 104.922 435.314 L 104.922 321.564 L 176.406 321.564 L 176.406 333.908 L 119.922 333.908 L 119.922 370.47 L 169.219 370.47 Z M 361.953 370.47 L 361.953 382.736 L 312.656 382.736 L 312.656 423.048 L 369.922 423.048 L 369.922 435.314 L 297.656 435.314 L 297.656 321.564 L 369.141 321.564 L 369.141 333.908 L 312.656 333.908 L 312.656 370.47 L 361.953 370.47 Z M 744.844 370.47 L 744.844 382.736 L 695.547 382.736 L 695.547 423.048 L 752.813 423.048 L 752.813 435.314 L 680.547 435.314 L 680.547 321.564 L 752.031 321.564 L 752.031 333.908 L 695.547 333.908 L 695.547 370.47 L 744.844 370.47 Z M 201.172 321.564 L 233.516 415.392 L 266.016 321.564 L 282.422 321.564 L 240.234 435.314 L 226.953 435.314 L 184.844 321.564 L 201.172 321.564 Z M 837.891 435.314 L 813.203 389.298 L 786.484 389.298 L 786.484 435.314 L 771.406 435.314 L 771.406 321.564 L 809.063 321.564 A 67.714 67.714 0 0 1 820.465 322.462 Q 831.597 324.367 838.633 330.314 A 28.234 28.234 0 0 1 847.973 346.112 A 43.603 43.603 0 0 1 848.984 355.783 A 33.13 33.13 0 0 1 847.364 366.3 A 29.156 29.156 0 0 1 843.242 374.298 Q 837.5 382.189 827.266 386.095 L 853.984 434.376 L 853.984 435.314 L 837.891 435.314 Z M 403.672 321.564 L 403.672 423.048 L 457.578 423.048 L 457.578 435.314 L 388.594 435.314 L 388.594 321.564 L 403.672 321.564 Z M 621.406 390.783 L 594.609 390.783 L 594.609 435.314 L 579.609 435.314 L 579.609 321.564 L 621.563 321.564 A 58.939 58.939 0 0 1 633.382 322.677 Q 643.853 324.822 650.82 331.095 A 31.498 31.498 0 0 1 661.261 352.734 A 43.563 43.563 0 0 1 661.406 356.329 A 42.358 42.358 0 0 1 660.183 366.816 A 28.703 28.703 0 0 1 651.055 381.837 A 33.737 33.737 0 0 1 638.957 388.395 Q 631.375 390.783 621.406 390.783 Z M 31.484 435.314 L 0 435.314 L 0 321.564 L 32.109 321.564 Q 46.953 321.564 58.359 328.126 Q 69.766 334.689 75.977 346.798 A 56.714 56.714 0 0 1 81.61 365.09 A 72.405 72.405 0 0 1 82.266 374.611 L 82.266 381.876 A 70.811 70.811 0 0 1 80.901 396.089 A 54.384 54.384 0 0 1 76.055 410.079 A 43.688 43.688 0 0 1 58.32 428.673 Q 46.797 435.158 31.484 435.314 Z M 557.109 374.923 L 557.109 382.111 A 84.063 84.063 0 0 1 555.954 396.388 A 61.428 61.428 0 0 1 551.484 411.29 A 47.073 47.073 0 0 1 544.437 422.573 A 39.568 39.568 0 0 1 535.547 430.314 A 41.988 41.988 0 0 1 517.437 436.551 A 53.211 53.211 0 0 1 511.484 436.876 A 46.539 46.539 0 0 1 497.148 434.729 A 41.117 41.117 0 0 1 487.656 430.275 A 42.517 42.517 0 0 1 473.431 415.13 A 52.502 52.502 0 0 1 471.523 411.447 A 60.914 60.914 0 0 1 466.599 395.109 A 80.613 80.613 0 0 1 465.625 383.126 L 465.625 374.923 A 80.349 80.349 0 0 1 466.963 359.928 A 61.534 61.534 0 0 1 471.328 345.939 A 47.804 47.804 0 0 1 478.594 334.387 A 40.445 40.445 0 0 1 487.461 326.681 A 42.476 42.476 0 0 1 508.016 320.106 A 51.915 51.915 0 0 1 511.328 320.001 A 48.029 48.029 0 0 1 525.126 321.92 A 41.202 41.202 0 0 1 535.43 326.603 Q 545.859 333.204 551.484 345.743 A 62.659 62.659 0 0 1 556.108 361.613 A 84.679 84.679 0 0 1 557.109 374.923 Z M 32.5 333.908 L 15 333.908 L 15 423.048 L 30.781 423.048 A 44.788 44.788 0 0 0 42.025 421.716 A 31.066 31.066 0 0 0 57.773 412.267 Q 67.422 401.486 67.422 381.564 L 67.422 374.923 A 66.419 66.419 0 0 0 66.442 363.138 Q 65.254 356.56 62.628 351.348 A 33.136 33.136 0 0 0 58.32 344.806 A 29.983 29.983 0 0 0 40.614 334.692 A 44.422 44.422 0 0 0 32.5 333.908 Z M 542.188 383.204 L 542.188 374.767 Q 542.188 361.488 538.688 352.264 A 34.552 34.552 0 0 0 534.063 343.712 A 26.136 26.136 0 0 0 514.933 333.066 A 36.352 36.352 0 0 0 511.328 332.892 A 29.93 29.93 0 0 0 500.775 334.678 A 26.131 26.131 0 0 0 488.945 343.712 Q 482.456 352.314 480.977 366.222 A 80.55 80.55 0 0 0 480.547 373.751 L 480.547 382.111 A 75.635 75.635 0 0 0 481.434 394.075 Q 482.456 400.445 484.656 405.615 A 36.251 36.251 0 0 0 488.789 412.931 A 26.162 26.162 0 0 0 507.755 423.944 A 34.329 34.329 0 0 0 511.484 424.142 A 31.817 31.817 0 0 0 521.413 422.669 A 25.294 25.294 0 0 0 533.984 413.556 A 35.865 35.865 0 0 0 539.331 402.99 Q 540.926 398.093 541.632 392.141 A 84.396 84.396 0 0 0 542.187 383.204 Z M 594.609 333.908 L 594.609 378.517 L 621.563 378.517 A 41.115 41.115 0 0 0 628.533 377.964 Q 632.395 377.298 635.463 375.832 A 19.498 19.498 0 0 0 640 372.853 A 18.274 18.274 0 0 0 645.649 363.249 Q 646.383 360.261 646.406 356.715 A 35.496 35.496 0 0 0 646.406 356.486 A 26.061 26.061 0 0 0 645.448 349.238 A 19.765 19.765 0 0 0 640 340.236 A 21.956 21.956 0 0 0 630.423 334.985 Q 627.07 334.076 623.099 333.927 A 41.129 41.129 0 0 0 622.422 333.908 L 594.609 333.908 Z M 786.484 333.908 L 786.484 377.033 L 809.531 377.033 Q 819.133 377.033 825.359 372.762 A 20.865 20.865 0 0 0 827.305 371.251 A 19.002 19.002 0 0 0 833.803 358.143 A 26.421 26.421 0 0 0 833.906 355.783 A 28.242 28.242 0 0 0 833.197 349.252 Q 831.794 343.346 827.617 339.611 A 20.478 20.478 0 0 0 820.214 335.463 Q 817.17 334.469 813.487 334.11 A 44.624 44.624 0 0 0 809.453 333.908 L 786.484 333.908 Z
            M 483.984 194.455 L 468.906 194.455 Q 468.906 184.142 462.344 178.244 Q 456.612 173.092 446.768 172.44 A 44.487 44.487 0 0 0 443.828 172.345 Q 435.995 172.345 430.597 174.78 A 19.575 19.575 0 0 0 426.523 177.228 A 15.866 15.866 0 0 0 420.392 188.867 A 22.527 22.527 0 0 0 420.313 190.783 Q 420.313 197.736 426.211 202.541 A 27.769 27.769 0 0 0 430.443 205.321 Q 435.011 207.814 442.052 210.062 A 126.226 126.226 0 0 0 446.289 211.33 Q 455.556 213.934 462.187 216.888 A 58.612 58.612 0 0 1 468.477 220.119 A 41.627 41.627 0 0 1 474.496 224.458 Q 477.875 227.416 480.049 230.84 A 25.769 25.769 0 0 1 480.352 231.33 A 26.638 26.638 0 0 1 483.841 241.209 A 34.63 34.63 0 0 1 484.219 246.408 A 28.547 28.547 0 0 1 482.043 257.72 Q 479.376 263.974 473.438 268.556 A 37.663 37.663 0 0 1 460.046 275.018 Q 454.65 276.47 448.264 276.788 A 73.57 73.57 0 0 1 444.609 276.877 Q 432.891 276.877 422.734 272.384 A 42.361 42.361 0 0 1 414.234 267.443 A 33.307 33.307 0 0 1 407.07 260.08 A 30.028 30.028 0 0 1 401.562 242.345 L 416.641 242.345 A 22.416 22.416 0 0 0 417.874 249.942 A 19.086 19.086 0 0 0 424.258 258.634 A 26.467 26.467 0 0 0 433.795 263.298 Q 437.58 264.324 442.052 264.548 A 51.03 51.03 0 0 0 444.609 264.611 A 46.714 46.714 0 0 0 451.49 264.138 Q 454.976 263.618 457.806 262.525 A 20.066 20.066 0 0 0 462.813 259.767 Q 469.141 254.924 469.141 246.564 Q 469.141 238.205 463.281 233.634 Q 458.587 229.973 447.775 226.387 A 156.037 156.037 0 0 0 442.031 224.611 Q 423.927 219.407 415.072 211.968 A 33.289 33.289 0 0 1 413.945 210.978 A 26.666 26.666 0 0 1 406.779 200.523 A 27.276 27.276 0 0 1 405.156 191.017 A 27.189 27.189 0 0 1 413.978 170.48 A 35.143 35.143 0 0 1 415.898 168.791 A 37.699 37.699 0 0 1 431.729 161.264 A 54.882 54.882 0 0 1 443.828 160.002 A 51.784 51.784 0 0 1 455.563 161.281 A 42.165 42.165 0 0 1 464.727 164.533 A 36.454 36.454 0 0 1 474.168 171.126 A 32.608 32.608 0 0 1 478.945 177.033 A 31.963 31.963 0 0 1 483.984 194.455 Z M 869.609 275.314 L 829.297 222.424 L 815.391 236.877 L 815.391 275.314 L 800.391 275.314 L 800.391 161.564 L 815.391 161.564 L 815.391 217.814 L 865.938 161.564 L 884.063 161.564 L 839.297 211.799 L 887.578 275.314 L 869.609 275.314 Z M 153.438 161.564 L 168.516 161.564 L 168.516 238.908 A 42.343 42.343 0 0 1 166.685 251.418 A 33.98 33.98 0 0 1 158.398 265.236 Q 148.359 275.47 131.172 276.72 L 127.188 276.877 Q 108.516 276.877 97.422 266.799 A 33.554 33.554 0 0 1 86.934 247.419 A 48.68 48.68 0 0 1 86.172 239.064 L 86.172 161.564 L 101.016 161.564 L 101.016 238.595 A 35.996 35.996 0 0 0 101.801 246.349 Q 102.92 251.426 105.638 255.208 A 21.075 21.075 0 0 0 107.812 257.775 A 22.005 22.005 0 0 0 117.604 263.394 Q 121.881 264.611 127.188 264.611 A 38.126 38.126 0 0 0 134.859 263.888 Q 142.126 262.394 146.68 257.814 A 22.174 22.174 0 0 0 152.322 247.787 Q 153.281 244.265 153.415 240.066 A 43.397 43.397 0 0 0 153.437 238.674 L 153.438 161.564 Z M 764.844 239.22 L 779.922 239.22 A 53.626 53.626 0 0 1 777.06 251.597 A 37.317 37.317 0 0 1 766.602 267.072 A 38.343 38.343 0 0 1 749.828 275.469 Q 744.029 276.833 737.236 276.875 A 70.021 70.021 0 0 1 736.797 276.877 A 45.392 45.392 0 0 1 721.346 274.352 A 39.003 39.003 0 0 1 704.492 262.424 Q 692.984 248.733 692.378 226.279 A 93.543 93.543 0 0 1 692.344 223.752 L 692.344 212.814 A 75.572 75.572 0 0 1 693.588 198.787 A 57.4 57.4 0 0 1 698.008 184.924 A 45.14 45.14 0 0 1 706.104 172.914 A 40.175 40.175 0 0 1 714.062 166.447 A 42.929 42.929 0 0 1 732.301 160.31 A 53.81 53.81 0 0 1 738.125 160.002 A 52.657 52.657 0 0 1 750.678 161.417 A 36.72 36.72 0 0 1 767.188 170.119 A 38.405 38.405 0 0 1 777.759 187.223 A 54.863 54.863 0 0 1 779.922 198.127 L 764.844 198.127 Q 762.891 184.533 756.367 178.439 Q 750.401 172.866 740.09 172.39 A 42.594 42.594 0 0 0 738.125 172.345 A 31.163 31.163 0 0 0 727.842 173.967 A 26.005 26.005 0 0 0 715.586 182.97 A 35.355 35.355 0 0 0 710.005 193.987 Q 707.422 202.175 707.422 213.205 L 707.422 224.22 A 71.902 71.902 0 0 0 708.336 236.054 Q 709.399 242.417 711.699 247.568 A 35.876 35.876 0 0 0 715.156 253.674 A 24.536 24.536 0 0 0 732.906 264.383 A 32.256 32.256 0 0 0 736.797 264.611 A 44.387 44.387 0 0 0 744.041 264.058 Q 747.942 263.411 751.067 262.009 A 20.538 20.538 0 0 0 755.977 258.947 A 20.046 20.046 0 0 0 760.51 253.24 Q 763.417 247.96 764.759 239.753 A 69.632 69.632 0 0 0 764.844 239.22 Z M 62.734 212.814 L 62.734 225.08 L 15 225.08 L 15 275.314 L 0 275.314 L 0 161.564 L 70.469 161.564 L 70.469 173.908 L 15 173.908 L 15 212.814 L 62.734 212.814 Z M 582.031 161.564 L 582.031 173.908 L 545.469 173.908 L 545.469 275.314 L 530.547 275.314 L 530.547 173.908 L 494.063 173.908 L 494.063 161.564 L 582.031 161.564 Z M 666.406 275.314 L 655.547 245.627 L 607.891 245.627 L 597.188 275.314 L 581.719 275.314 L 625.156 161.564 L 638.281 161.564 L 681.797 275.314 L 666.406 275.314 Z M 207.266 161.564 L 207.266 263.049 L 261.172 263.049 L 261.172 275.314 L 192.188 275.314 L 192.188 161.564 L 207.266 161.564 Z M 293.359 161.564 L 293.359 263.049 L 347.266 263.049 L 347.266 275.314 L 278.281 275.314 L 278.281 161.564 L 293.359 161.564 Z M 631.719 180.08 L 612.422 233.283 L 651.094 233.283 L 631.719 180.08 Z M 392.188 221.095 L 392.188 232.892 L 354.063 232.892 L 354.063 221.095 L 392.188 221.095 Z
            M 217.031 1.564 L 217.031 115.314 L 201.953 115.314 L 144.688 27.658 L 144.688 115.314 L 129.609 115.314 L 129.609 1.564 L 144.688 1.564 L 202.109 89.611 L 202.109 1.564 L 217.031 1.564 Z M 887.5 1.564 L 887.5 115.314 L 872.422 115.314 L 815.156 27.658 L 815.156 115.314 L 800.078 115.314 L 800.078 1.564 L 815.156 1.564 L 872.578 89.611 L 872.578 1.564 L 887.5 1.564 Z M 682.5 1.564 L 682.5 115.314 L 667.422 115.314 L 667.422 62.736 L 610.078 62.736 L 610.078 115.314 L 595.078 115.314 L 595.078 1.564 L 610.078 1.564 L 610.078 50.47 L 667.422 50.47 L 667.422 1.564 L 682.5 1.564 Z M 773.438 50.47 L 773.438 62.736 L 724.141 62.736 L 724.141 103.049 L 781.406 103.049 L 781.406 115.314 L 709.141 115.314 L 709.141 1.564 L 780.625 1.564 L 780.625 13.908 L 724.141 13.908 L 724.141 50.47 L 773.438 50.47 Z M 559.531 79.22 L 574.609 79.22 A 53.626 53.626 0 0 1 571.747 91.597 A 37.317 37.317 0 0 1 561.289 107.072 A 38.343 38.343 0 0 1 544.515 115.469 Q 538.717 116.833 531.924 116.875 A 70.021 70.021 0 0 1 531.484 116.877 A 45.392 45.392 0 0 1 516.034 114.352 A 39.003 39.003 0 0 1 499.18 102.424 Q 487.672 88.733 487.065 66.279 A 93.543 93.543 0 0 1 487.031 63.752 L 487.031 52.814 A 75.572 75.572 0 0 1 488.276 38.787 A 57.4 57.4 0 0 1 492.695 24.924 A 45.14 45.14 0 0 1 500.791 12.914 A 40.175 40.175 0 0 1 508.75 6.447 A 42.929 42.929 0 0 1 526.988 0.31 A 53.81 53.81 0 0 1 532.813 0.002 A 52.657 52.657 0 0 1 545.365 1.417 A 36.72 36.72 0 0 1 561.875 10.119 A 38.405 38.405 0 0 1 572.446 27.223 A 54.863 54.863 0 0 1 574.609 38.127 L 559.531 38.127 Q 557.578 24.533 551.055 18.439 Q 545.089 12.866 534.777 12.39 A 42.594 42.594 0 0 0 532.813 12.345 A 31.163 31.163 0 0 0 522.53 13.967 A 26.005 26.005 0 0 0 510.273 22.97 A 35.355 35.355 0 0 0 504.693 33.987 Q 502.109 42.175 502.109 53.205 L 502.109 64.22 A 71.902 71.902 0 0 0 503.023 76.054 Q 504.087 82.417 506.387 87.568 A 35.876 35.876 0 0 0 509.844 93.674 A 24.536 24.536 0 0 0 527.594 104.383 A 32.256 32.256 0 0 0 531.484 104.611 A 44.387 44.387 0 0 0 538.728 104.058 Q 542.63 103.411 545.754 102.009 A 20.538 20.538 0 0 0 550.664 98.947 A 20.046 20.046 0 0 0 555.197 93.24 Q 558.104 87.96 559.446 79.753 A 69.632 69.632 0 0 0 559.531 79.22 Z M 420.625 115.314 L 409.766 85.627 L 362.109 85.627 L 351.406 115.314 L 335.938 115.314 L 379.375 1.564 L 392.5 1.564 L 436.016 115.314 L 420.625 115.314 Z M 15.078 1.564 L 15.078 103.049 L 68.984 103.049 L 68.984 115.314 L 0 115.314 L 0 1.564 L 15.078 1.564 Z M 275.156 115.314 L 243.672 115.314 L 243.672 1.564 L 275.781 1.564 Q 290.625 1.564 302.031 8.127 Q 313.438 14.689 319.648 26.799 A 56.714 56.714 0 0 1 325.282 45.091 A 72.405 72.405 0 0 1 325.938 54.611 L 325.938 61.877 A 70.811 70.811 0 0 1 324.573 76.089 A 54.384 54.384 0 0 1 319.727 90.08 A 43.688 43.688 0 0 1 301.992 108.674 Q 290.469 115.158 275.156 115.314 Z M 102.188 1.564 L 102.188 115.314 L 87.188 115.314 L 87.188 1.564 L 102.188 1.564 Z M 276.172 13.908 L 258.672 13.908 L 258.672 103.049 L 274.453 103.049 A 44.788 44.788 0 0 0 285.697 101.716 A 31.066 31.066 0 0 0 301.445 92.267 Q 311.094 81.486 311.094 61.564 L 311.094 54.924 A 66.419 66.419 0 0 0 310.114 43.138 Q 308.926 36.561 306.3 31.348 A 33.136 33.136 0 0 0 301.992 24.806 A 29.983 29.983 0 0 0 284.286 14.692 A 44.422 44.422 0 0 0 276.172 13.908 Z M 385.938 20.08 L 366.641 73.283 L 405.313 73.283 L 385.938 20.08 Z"
        />
      </motion.svg>
    </div>
  );
}

export default Title;
