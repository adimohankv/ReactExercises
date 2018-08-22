export default (query, key, value) => {
    let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    let separator = query.indexOf('?') !== -1 ? "&" : "?";

    if (query.match(re)) {
        return query.replace(re, '$1' + key + '=' + value + '$2');
    } else {
        return query + separator + key + "=" + value;
    }
}