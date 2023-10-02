import { Component } from "react";
import { ImgGalleryItem } from "./ImgGalleryItem";
import { LoadMore } from "./Button";
import { RotatingSquare } from 'react-loader-spinner';
import { GalleryContainer, GalleryList, Loader } from "./SerchImages.styled";

export class ImgGallery extends Component{

    state = {
        images: [],
        page: 1,
        loading: false
        
    }

   async componentDidUpdate(prevP, prevS) {
       
        if (prevP.keyWord !== this.props.keyWord) {
            this.setState({ page: 1, images: [] })

            this.setState({loading: true})
          const fe = await  fetch(`https://pixabay.com/api/?q=${this.props.keyWord}&page=1&key=34021222-b9c8863f050204b598fd68392&image_type=photo&orientation=horizontal&per_page=12`)
            const res = await fe.json();
            this.setState((prev) => ({ images: [...prev.images, ...res.hits], loading: false }))
            // this.setState({loading: false})
        }

        if (prevS.page !== this.state.page) { 
            if (this.state.page === 1) {
                return
            }
          const fromApi = await  fetch(`https://pixabay.com/api/?q=${this.props.keyWord}&page=${this.state.page}&key=34021222-b9c8863f050204b598fd68392&image_type=photo&orientation=horizontal&per_page=12`)
          const images =  await fromApi.json()
          this.setState((prev) => ({ images: [...prev.images, ...images.hits], loading: false}))
        } 
    }

    onLoadMore = () => {
        this.setState((prev)=> ({page: prev.page + 1}))
    }


    render() {
        return <> {this.props.keyWord &&
            <GalleryContainer>
                {this.state.loading ?
                
                 <RotatingSquare
  height="100"
  width="100"
  color="#3f51b5"
  ariaLabel="rotating-square-loading"
  strokeWidth="4"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
                        />
                        
                : <> <GalleryList>
                {this.state.images.map(({webformatURL,largeImageURL, id}) => {
                    return <ImgGalleryItem
                        img={webformatURL}
                        id={id}
                        modalImage={largeImageURL}
                        onClick={this.props.onClick}
                    />
                })}
                </GalleryList>
                <LoadMore onLoadMore={this.onLoadMore} /> </>}
           
            </GalleryContainer>
        }
        </>
    }

}