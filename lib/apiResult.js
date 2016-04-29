'use strict';

function extendAPIOutput(req, res, next) {

    // 响应API成功结果
    res.apiSuccess = function (data) {
        res.json({
            status: 'OK',
            result: data
        });
    };

    // 响应API出错,err是一个Error对象
    res.apiError = function (err) {
        res.json({
            status: 'Error',
            error_code : err.error_code || 'UNKNOWN',
            error_message : err.error_message || err.toString()
        });
    };

    next();
}


exports.extendAPIOutput = extendAPIOutput;
