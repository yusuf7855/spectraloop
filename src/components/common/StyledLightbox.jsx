import {useEffect} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "../../styles/components/lightbox.css"

function StyledLightbox({fullSizePictureOpen, setFullSizePictureOpen, startIndex, setStartIndex, imageList}) {
    useEffect(() => {
        if (fullSizePictureOpen) {
            document.getElementsByTagName('html')[0].style.overflowY = "hidden"
            document.getElementsByTagName('html')[0].style.scrollbarGutter = "stable"
        } else {
            document.getElementsByTagName('html')[0].style.overflowY = "unset"
            document.getElementsByTagName('html')[0].style.scrollbarGutter = "unset"
        }
    }, [fullSizePictureOpen])

    return (
        <Lightbox
            animation={{fade: 400}}
            open={fullSizePictureOpen}
            controller={{closeOnBackdropClick: true}}
            close={() => {
                setFullSizePictureOpen(false)
                setStartIndex(0)
            }}
            plugins={[Zoom, Counter, Thumbnails]}
            index={startIndex}
            noScroll={{disabled: true}}
            slides={imageList?.map((image) => ({src: image}))}
            thumbnails={{imageFit: "cover", border: 0}}
        />
    );
}

export default StyledLightbox;