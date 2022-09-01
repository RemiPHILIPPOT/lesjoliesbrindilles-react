import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import ProjectImg1 from "../../assets/img/assetsljb/bouquet-ble-roses.jpeg";
import ProjectImg2 from "../../assets/img/assetsljb/bouquet-roses-veronique.jpg";
import ProjectImg3 from "../../assets/img/assetsljb/centre-de-table-mariage.jpeg";
import ProjectImg4 from "../../assets/img/assetsljb/composition-mariage-pampa.jpg";
import ProjectImg5 from "../../assets/img/assetsljb/suspension-centre-de-table-mariage.jpeg";
import ProjectImg6 from "../../assets/img/assetsljb/coeur-deuil.jpeg";
import styled from 'styled-components';

const Lightbox = () => {
// if toggler is updated when lightbox is closed it will open it
// if toggler is updated when lightbox is opened it will close it
const [toggler, setToggler] = useState(false);

return (
<>

<button onClick={() => setToggler(!toggler)}>
 <div>Je veux en voir davantages !</div>
</button>

<FsLightbox
toggler={toggler}
sources={[ ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5, ProjectImg6 ]}


/>
</>
);
}

export default Lightbox;

// const Wrapper = styled.div`
// width: 100%;
// background-color: #fff;
// color : #000;`