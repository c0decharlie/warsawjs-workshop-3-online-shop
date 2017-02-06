export default function HTTPService($http) {
    return {
        $get(url) {
            return $http.get(url);
        }
    }
}
