function switchPages(x) {
    switch(x) {
        case 1:
            $("#first").show();
            $("#second").hide();
            $("#third").hide();
            $("#fourth").hide();
            break;
        case 2:
            $("#first").hide();
            $("#second").show();
            $("#third").hide();
            $("#fourth").hide();
            break;
        case 3:
            $("#first").hide();
            $("#second").hide();
            $("#third").show();
            $("#fourth").hide();
            break;
        case 4:
            $("#first").hide();
            $("#second").hide();
            $("#third").hide();
            $("#fourth").show();
            break;
    }
}