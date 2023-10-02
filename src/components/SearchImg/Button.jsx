import { LoadMoreBtn } from "components/Modal/Modal.styled"

export const LoadMore = ({onLoadMore}) => {
    return <LoadMoreBtn type="button" onClick={onLoadMore}>Load more</LoadMoreBtn>
}