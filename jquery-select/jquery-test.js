var JqueryTest;
(function(JqueryTest) {
    var initTable = function() {
        $('table tbody').empty();
        var begin = moment();
        // for (var i = 0; i < 2000; i++) {
        //     $('table tbody').append('<tr><td scope="row">' + (i + 1) + '</td><td class="table-info"><fieldset class="form-group"><input type="checkbox"><label for="checkbox1"></label></fieldset></td><td>3</td><td> <input type="text" name="txt_heheda" disabled></td></tr>');
        // }

        var trs = '';
        for (var i = 0; i < 2000; i++) {
            trs += '<tr><td scope="row">' + (i + 1) + '</td><td class="table-info"><fieldset class="form-group"><input type="checkbox"><label for="checkbox1"></label></fieldset></td><td>3</td><td> <input name="txt_heheda" type="text" disabled></td></tr>';
        }
        $('table tbody').append(trs);
        var end = moment();
        var diff = end.diff(begin);
        $('#p_log').append('<br>耗时：' + diff + '毫秒');
    }

    var changeTableStyle1 = function() {
        var begin = moment();
        var $trs = $('table tbody tr');
        // _.forEach($trs, function(tr) {
        //     $(tr).addClass('table-success');
        // });
        for (var i = 0; i < 2000; i++) {
            $('table tbody tr:eq(' + i + ')').addClass('table-success');
        }
        // $trs.addClass('table-success');
        var end = moment();
        var diff = end.diff(begin);
        $('#p_log').append('<br>耗时：' + diff + '毫秒');
    }

    var changeTableStyle2 = function() {
        var begin = moment();
        $('table tbody tr').removeClass('table-success');
        $('table tbody tr').removeClass('table-success');
        var even = $('table tbody tr:even td:even');
        even.addClass('table-success');
        var odd = $('table tbody tr:odd td:odd');
        odd.addClass('table-success');
        // _.forEach($trs, function(tr) {
        //     $(tr).addClass('table-success');
        // });
        var end = moment();
        var diff = end.diff(begin);
        $('#p_log').append('<br>耗时：' + diff + '毫秒');
    }
    var changeInput = function() {
        var begin = moment();

        var $inputs = $('table input:text');
        _.forEach($inputs, function(item) {
            $(item).val(Math.random());
        });

        var end = moment();
        var diff = end.diff(begin);
        $('#p_log').append('<br>耗时：' + $inputs.length + 'ge ');
        $('#p_log').append('<br>耗时：' + diff + '毫秒');
    }

    var getCheck = function() {

        var length = $(':contains("Warning").col').length;
        var notselectlength = '怎么写？';
        // var notselectlength = $('table tbody :not(input:checkbox:checked)').length;
        // var notselectlength = $('table tbody input:checkbox:not(checked)').length;
        // var notselectlength = $('table tbody input:checkbox:not(:checked)').length;
        var notselectlength = $('table tbody input:not(:checked)').length;
        $('#p_log').append('<br>选中：' + length + '个');
        $('#p_log').append('<br>没选中：' + notselectlength + '个');
    }


    var initBtns = function() {
        $('.btn-primary').off('click').on('click', function() {
            initTable();
        });

        $('.btn-default').off('click').on('click', function() {
            changeTableStyle1();
        });

        $('.btn-danger').off('click').on('click', function() {
            $('#p_log').empty();
        });

        $('.btn-secondary').off('click').on('click', function() {
            changeInput();
        });

        $('.btn-success').off('click').on('click', function() {
            changeTableStyle2();
        });

        $('.btn-info').off('click').on('click', function() {
            getCheck();
        });
    }

    function init() {
        initBtns();
    }
    JqueryTest.init = init;
})(JqueryTest || (JqueryTest = {}));