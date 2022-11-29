
const FormattedPrice = (price) => {
    return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    });
};

export default FormattedPrice;