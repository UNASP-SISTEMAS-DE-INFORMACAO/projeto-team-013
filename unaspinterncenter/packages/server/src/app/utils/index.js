exports.getStatusText = function (status) {
  var returned_status
  switch (status) {
    case 'sent':
      returned_status = 'Enviado'
      break
    case 'analyzing':
      returned_status = 'Em analise'
      break
    case 'approved':
      returned_status = 'Aprovado'
      break
    case 'disapproved':
      returned_status = 'Reprovado'
      break
    default:
      returned_status = 'Enviado'
  }

  return returned_status
}
