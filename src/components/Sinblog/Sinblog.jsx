import React from "react";
import main from "../../assets/Products/Productsnbg/recent (5).png";
import "./sinblog.css";

const Sinblog = () => {
  return (
    <div className="sinblog">
      <div className="actual">
        <div className="image">
          <img src={main} alt="image" />
          <div className="title">
            <h3>From Runway to Reality</h3>
          </div>
        </div>
        <div className="text">
          <div className="top">
            <div className="date">11/05/23</div>
            <div className="written">
              <div className="by">Written by: Anna Marie</div>
              <div className="buttom">
                <button type="button">Follow +</button>
              </div>
            </div>
          </div>
          <div className="middle">
            <p>
              Watching models strut down the runway in stunning designer outfits
              can be inspiring, but translating those looks into your own
              wardrobe can be challenging. However, with a few simple tips and
              tricks, you can bring high fashion into your everyday life. Start
              with the basics High fashion often involves statement pieces, but
              it's important to start with the basics. Invest in classic
              wardrobe staples like a tailored blazer, a little black dress, and
              a pair of well-fitted jeans. These pieces will serve as the
              foundation for your high-fashion looks. Look for inspiration Pay
              attention to the latest runway shows and fashion magazines to get
              inspired by high fashion. Look for common themes, such as bold
              colors, interesting textures, and unique silhouettes, and think
              about how you can incorporate these elements into your own
              wardrobe. Experiment with accessories Accessories can be a great
              way to add a touch of high fashion to any outfit. Try
              experimenting with statement jewelry, oversized sunglasses, or a
              bold scarf to elevate your look. Mix and match Don't be afraid to
              mix and match different styles and textures to create your own
              unique look. Try pairing a sequin skirt with a denim jacket, or a
              statement blouse with a pair of leather pants. Mixing unexpected
              pieces can create a fashion-forward look that is all your own.
              Stay true to your personal style While it's fun to experiment with
              high fashion, it's important to stay true to your personal style.
              If you prefer a more minimalistic look, try incorporating high
              fashion elements through accessories or statement pieces, rather
              than completely overhauling your wardrobe. By following these
              tips, you can take your wardrobe from ordinary to extraordinary,
              incorporating high fashion elements into your everyday style.
              Remember, the key is to have fun with your fashion choices and
              experiment with new looks until you find the ones that work best
              for you.
            </p>
          </div>
          <div className="buttom"></div>
        </div>
      </div>
    </div>
  );
};

export default Sinblog;
