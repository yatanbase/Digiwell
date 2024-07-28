import React from "react";

import one from "./Assets/one.png";
import two from "./Assets/two.svg";
import three from "./Assets/three.svg";
import four from "./Assets/four.png";
import das_one from "./Assets/das_one.svg";
import das_two from "./Assets/das_two.svg";
import das_three from "./Assets/das_three.svg";
import das_four from "./Assets/das_four.svg";
import arrow from "./Assets/arrow.svg";

export default function Main() {
  return (
    <>
      <main>
        <div className="first">
          <img className="img_two" src={two} alt="image" />
          <div className="login_btn">
            <img className="img_one" src={one} alt="image" />
            <div className="login_btn_box">
              <p>
                <span>WELLBEING</span>
                <span> tools </span>
                for the modern REMOTE workers.
              </p>
              <div className="login_buttons">
                <button>Login</button>/<button>Signup</button>
              </div>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="sec_left">
            <p>Digital Wellbeing</p>
            <p>New ways to find balance for you and your family.</p>
          </div>
          <img src={three} alt="image" />
        </div>

        <div className="third">
          <p>RELAX.</p>
          <p>This is your cue to unplug.</p>
        </div>

        <div className="fourth">
          <div>
            Unplug
            <img src={das_one} alt="image" />
            <img className="arrow" src={arrow} alt="image" />
          </div>
          <div>
            Productivity
            <img src={das_two} alt="image" />
            <img className="arrow" src={arrow} alt="image" />
          </div>
          <div>
            Re-balance
            <img src={das_three} alt="image" />
            <img className="arrow" src={arrow} alt="image" />
          </div>
          <div>
            Sabbatical
            <img src={das_four} alt="image" />
            <img className="arrow" src={arrow} alt="image" />
          </div>
        </div>

        <div className="five">
          <div className="five_left">
            <p>Productivity</p>
            <p>
              At you fingertips. Tracks your friends progress. No more digital
              burnout.
            </p>
          </div>
          <img src={four} alt="image" />
        </div>

        <div className="sixth">
          <p className="six_heading">Testimonials</p>
          <div className="six_boxes">
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>
            <div className="box">
              <div className="box_user">
                <img src="" alt="image" />
                <span>
                  <p>Dan</p>
                  <p>@danny71</p>
                </span>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora sapiente iusto at eveniet dolorum beatae corporis rem atque quasi! Dignissimos doloremque ex, at exercitationem deleniti natus fugiat aspernatur facilis. Doloremque, aspernatur optio maiores quia 
            </div>


          </div>
        </div>
      </main>
    </>
  );
}
