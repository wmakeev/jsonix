var AR_Module_Factory = function () {
  var AR = {
    name: 'AR',
    defaultElementNamespaceURI: 'urn:test',
    typeInfos: [{
        localName: 'AccumulateResponse',
        propertyInfos: [{
            name: 'testCase',
            collection: true,
            elementName: 'TestCase',
            typeInfo: '.AccumulateResponse.TestCase'
          }]
      }, {
        localName: 'AccumulateResponse.TestCase',
        typeName: null,
        propertyInfos: [{
            name: 'transactionId',
            elementName: 'TransactionId'
          }, {
            name: 'transactionType',
            elementName: 'TransactionType'
          }, {
            name: 'status',
            elementName: 'Status'
          }]
      }],
    elementInfos: [{
        elementName: 'AccumulateResponse',
        typeInfo: '.AccumulateResponse'
      }]
  };
  return {
    AR: AR
  };
};
if (typeof define === 'function' && define.amd) {
  define([], AR_Module_Factory);
}
else {
  var AR_Module = AR_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.AR = AR_Module.AR;
  }
  else {
    var AR = AR_Module.AR;
  }
}