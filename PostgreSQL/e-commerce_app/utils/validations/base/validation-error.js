class ValidationError {
    /**
     * @param {String|null} errorMessage 
     * @param {Number|null} errorCode 
     */

    constructor(errorMessage = null, errorCode = null) {
        this.error = errorMessage;
        this.code = errorCode
    }
};

module.exports = ValidationError;