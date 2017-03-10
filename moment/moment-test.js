var momentTest;
(function (momentTest) {
  var $log_p = null;
  var $datepick_begin = null;
  var $datepick_end = null;
  var _format = 'YYYY-MM-DD HH:mm:ss';

  var initBtns = function () {
    $('.btn-primary').off('click').on('click', whatismoment);

    $('.btn-secondary').off('click').on('click', setValue);
    $('.btn-success').off('click').on('click', beforeafter);
    $('.btn-warning').off('click').on('click', showutc);

    $('.btn-danger').off('click').on('click', function () {
      $log_p.empty();
    });
  }

  var showutc = function () {
    var a = moment($datepick_begin.val());
    log(a.unix());
    log(a.valueOf());
  }

  var beforeafter = function () {
    var a = moment($datepick_begin.val());
    var b = moment($datepick_end.val());
    // moment().isBefore(Moment | String | Number | Date | Array);
    // moment().isSame(Moment | String | Number | Date | Array);
    // moment().isAfter(Moment | String | Number | Date | Array);
    // moment().isBetween(moment - like, moment - like);
    log(a.format(_format) + '在' + b.format(_format) + '之前吗?' + moment(a).isBefore(b));
  }

  var setValue = function () {
    a = moment($datepick_begin.val()).set({ 'minute': 33, 'month': 3 });
    log(a.format(_format));
  }

  var whatismoment = function () {
    var a = moment($datepick_begin.val());
    var b = moment();
    log(a.format(_format));
  }

  var log = function (context) {
    $log_p.append(context);
    $log_p.append('</br>');
  }

  function init() {
    $log_p = $('#p_log');
    $datepick_begin = $('#datepicker1');
    $datepick_end = $('#datepicker2');
    $datepick_begin.val(moment().format('YYYY-MM-DD'));
    initBtns();
  }
  momentTest.init = init;
})(momentTest || (momentTest = {}));