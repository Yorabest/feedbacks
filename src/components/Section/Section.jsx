
export const Section = ({ title, children }) => {
    return <>
        {title && <h1>{title}</h1>}
        {children}
    </>
      
}