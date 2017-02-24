var JqueryTest;
(function(JqueryTest) {
    var initTable = function() {
        $('#p_log').append('<br>' + new moment().format('mm.ss.SSS'));
        for (var i = 0; i < 300; i++) {
            $('table tbody').append('<tr><td>1</td><td>2</td><td>3</td><td>4</td></tr>');
        }

        $('#p_log').append('<br>' + new moment().format('mm.ss.SSS'));
    }


    function init() {
        initTable();
    }
    JqueryTest.init = init;
})(JqueryTest || (JqueryTest = {}));