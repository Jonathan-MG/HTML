const Imagem = ({ url, alt, imgStyle }) => {
    return <div className={`${imgStyle} flex justify-content-center`}>
        <img className="border-round" src={url} alt={alt} />
    </div>
}
export default Imagem