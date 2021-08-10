import React, { useState } from "react";
import { Modal } from "./Modal";

export const ModalExample = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div>
      <h2>Bad Modal Example</h2>
      <button
        onClick={() => setIsModalVisible((isModalVisible) => !isModalVisible)}
      >
        Open modal
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit
        amet massa. Facilisi nullam vehicula ipsum a arcu. Massa tincidunt nunc
        pulvinar sapien et ligula ullamcorper malesuada proin. Egestas tellus
        rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ut etiam
        sit amet nisl purus in mollis nunc sed. Consequat semper viverra nam
        libero justo laoreet sit amet cursus. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Eu tincidunt tortor aliquam nulla facilisi
        cras. Morbi tincidunt ornare massa eget.{" "}
        <a href="https://www.google.com/">Nam libero</a> justo laoreet sit amet.
      </p>
      <p>
        Tristique senectus et netus et malesuada fames ac turpis. Natoque
        penatibus et magnis dis parturient montes nascetur ridiculus mus.
        Pretium <a href="https://www.google.com/">vulputate sapien nec</a>{" "}
        sagittis aliquam malesuada bibendum arcu vitae. Nunc sed augue lacus
        viverra vitae. Laoreet non curabitur gravida arcu ac tortor dignissim.
        Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Vitae
        congue eu consequat ac felis donec et. Enim tortor at auctor urna nunc
        id. Tincidunt augue interdum velit euismod in pellentesque. Maecenas sed
        enim ut sem viverra aliquet. Ac turpis egestas sed tempus urna et
        pharetra pharetra. Sed libero enim sed faucibus. Sed cras ornare arcu
        dui. Venenatis urna <a href="https://www.google.com/">cursus eget</a>{" "}
        nunc scelerisque viverra mauris. Quam nulla porttitor massa id. Ut
        venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
      </p>
      <p>
        Enim facilisis gravida neque convallis a cras. Eget dolor morbi non arcu
        risus quis. Pulvinar pellentesque habitant morbi tristique senectus.
        <a href="https://www.google.com/">Suspendisse interdum</a> consectetur
        libero id faucibus nisl tincidunt. Tincidunt praesent semper feugiat
        nibh sed pulvinar proin. Nunc pulvinar sapien et ligula ullamcorper
        malesuada. Pellentesque habitant morbi tristique senectus et. Sapien et
        ligula ullamcorper malesuada proin libero. Sed risus ultricies tristique
        nulla aliquet enim tortor. Congue mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque pulvinar. Sed sed risus pretium quam.
        Faucibus interdum posuere lorem ipsum dolor sit amet consectetur
        adipiscing.
      </p>
      <p>
        At erat pellentesque adipiscing commodo elit at imperdiet. Amet commodo
        nulla facilisi nullam vehicula ipsum a arcu. Pharetra convallis posuere
        morbi leo urna molestie at elementum eu. In est ante in nibh mauris
        cursus mattis molestie a. Augue ut lectus arcu bibendum at varius.
        Turpis egestas pretium aenean pharetra magna ac placerat. Hac habitasse
        platea <a href="https://www.google.com/">dictumst quisque sagittis</a>{" "}
        purus sit. Facilisi etiam dignissim diam quis enim lobortis. Cursus
        vitae congue mauris rhoncus aenean vel. Et sollicitudin ac orci
        phasellus egestas tellus rutrum tellus. Laoreet sit amet cursus sit amet
        dictum sit. Suspendisse potenti nullam ac tortor vitae.
      </p>
      <p>
        Tristique et egestas quis ipsum suspendisse ultrices gravida dictum
        fusce. Faucibus pulvinar elementum integer enim neque volutpat ac
        tincidunt. At risus viverra adipiscing at in tellus integer feugiat
        scelerisque. Ornare arcu odio ut sem nulla pharetra diam sit amet.
        Tincidunt id <a href="https://www.google.com/">aliquet</a> risus
        feugiat. Aliquet lectus proin nibh nisl. Id interdum velit laoreet id
        donec ultrices tincidunt arcu non. Proin fermentum leo vel orci.
        Penatibus et magnis dis parturient montes nascetur ridiculus. Justo nec
        ultrices dui sapien eget mi proin sed libero. Integer eget aliquet nibh
        praesent tristique magna sit. Semper risus in hendrerit{" "}
        <a href="https://www.google.com/">gravida rutrum quisque</a>. Pharetra
        convallis posuere morbi leo urna. Suspendisse interdum consectetur
        libero id faucibus nisl tincidunt. Erat velit scelerisque in dictum non
        consectetur a erat nam. Quis hendrerit dolor magna eget.
      </p>
      {isModalVisible && (
        <Modal
          closeModal={() =>
            setIsModalVisible((isModalVisible) => !isModalVisible)
          }
        />
      )}
    </div>
  );
}
