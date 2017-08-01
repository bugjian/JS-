/**
 * Created by jian on 2017/7/17.
 */
function find() {
    var result = {};
    var serach = location.search;
    serach = serach.substring(1);
    serach = serach.split('&');
    serach.forEach(function(query){
        query = query.split('=');
        result[query[0]] = query[1];
    });
    return result;
}
alert(JSON.stringify(find()));