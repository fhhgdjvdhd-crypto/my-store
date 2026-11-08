function orderProduct(name) {
    let msg = "مرحباً، أريد الاستفسار أو طلب: " + name;
    let url = "https://wa.me/201126758029?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
}
