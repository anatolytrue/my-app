import PropTypes from 'prop-types'
import defaultImage from '../components/default.jpg'


export default function Painting(props) {
    const { imageUrl = defaultImage, title, profileUrl, authorName='hz', price, quantity } = props;
    return (
    <div>
    <img src={imageUrl} alt={title} width='480' />
        <h2>{title}</h2>
        <p>Автор: <a href={profileUrl}>{ authorName}</a> </p>
    <p>Ціна:{price} кредитів</p>
            <p>Доступність: { quantity < 10 ? 'закінчується' : 'є в наявності'}</p>
    <button type='button'>Додати у кошик</button>
</div>)
}

Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}