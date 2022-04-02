import mercadoPago from 'readline-sync'

console.log('Simulador de custos MERCADO PAGO \n')

console.log('Digite a opção desejada')
console.log('1 - COBRAR')
console.log('2 - RECEBER \n')

let opcao = mercadoPago.question('== ')



switch(opcao) {

    case '1': {

            let taxaLiberacao = 5.31
            let taxaParcelamentoVendedor = 0.0
            let cobrar = mercadoPago.question('Qual valor você deseja passar na máquina? R$ ')
            let parcelas = mercadoPago.question('Em quantas vezes será o parcelamento? ')

            switch(parcelas) {

                case '2': {
                        taxaParcelamentoVendedor = 4.59
                    break
                }

                case '3': {
                        taxaParcelamentoVendedor = 5.97
                    break
                }

                case '4': {
                        taxaParcelamentoVendedor = 7.33
                    break
                }

                case '5': {
                        taxaParcelamentoVendedor = 8.66
                    break
                }

                case '6': {
                        taxaParcelamentoVendedor = 9.96
                    break
                }

                case '7': {
                        taxaParcelamentoVendedor = 11.24
                    break
                }

                case '8': {
                        taxaParcelamentoVendedor = 12.50
                    break
                }

                case '9': {
                        taxaParcelamentoVendedor = 13.73
                    break
                }

                case '10': {
                        taxaParcelamentoVendedor = 14.93
                    break
                }

                case '11': {
                        taxaParcelamentoVendedor = 16.12
                    break
                }

                case '12': {
                        taxaParcelamentoVendedor = 17.28
                    break
                }

                default: {
                    console.log('ESCOLHA ENTRE 1 A 12 PARCELAS E TENTE NOVAMENTE!') 
                break
            }
            } // ATRIBUI A TAXA DE JUROS CONFORME A QUANTIDADE DE PARCELAS (1 A 12)

            let valorJuros = (cobrar / 100) * taxaParcelamentoVendedor
            let valorTaxaLiberacao = (cobrar / 100) * taxaLiberacao

            let valorTotal = cobrar - valorTaxaLiberacao - valorJuros
            
            console.log('\nVOCÊ REBEREÁ AGORA: R$ ' +valorTotal.toFixed(2)+ '\n')

        break                               
    }

    case '2': {

            let taxaLiberacao = 5.31
            let taxaParcelamentoComprador = 0.0
            let cobrar = mercadoPago.question('Qual valor você deseja passar na máquina? R$ ')
            let parcelas = mercadoPago.question('Em quantas vezes será o parcelamento? ')

            switch(parcelas) {

            case '2': {
                    taxaParcelamentoComprador = 6.76
                break
            }

            case '3': {
                    taxaParcelamentoComprador = 8.44
                break
            }

            case '4': {
                    taxaParcelamentoComprador = 10.23
                break
            }

            case '5': {
                    taxaParcelamentoComprador = 11.93
                break
            }

            case '6': {
                    taxaParcelamentoComprador = 13.58
                break
            }

            case '7': {
                    taxaParcelamentoComprador = 15.01
                break
            }

            case '8': {
                    taxaParcelamentoComprador = 16.90
                break
            }

            case '9': {
                    taxaParcelamentoComprador = 18.86
                break
            }

            case '10': {
                    taxaParcelamentoComprador = 20.07
                break
            }

            case '11': {
                    taxaParcelamentoComprador = 21.92
                break
            }

            case '12': {
                    taxaParcelamentoComprador = 23.75
                break
            }

            default: {
                    console.log('ESCOLHA ENTRE 1 A 12 PARCELAS E TENTE NOVAMENTE!') 
                break
            }


            }

            let valorJuros = (cobrar / 100) * taxaParcelamentoComprador
            let valorTaxaLiberacao = (cobrar / 100) * taxaLiberacao

            let valorTotal = Number(cobrar) + Number(valorJuros)
            let valorParcela = valorTotal / Number(parcelas)
            
            console.log('\nO CLIENTE PAGARÁ: R$ ' +valorTotal.toFixed(2))

            console.log('Em ' +parcelas+ ' vezes de R$ ' +valorParcela+ '\n')

        break   
    }

        default: {
            console.log('OPÇÃO INVÁLIDA!')
            break
        }
}
