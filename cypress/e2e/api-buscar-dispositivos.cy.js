/// <reference types="cypress"/>

describe('Restful-API.dev', () => {
    describe('Buscar Dispositivos', () => {
        it('buscar dispositivo específico', () => {
            cy.request({
                method: 'GET',
                url: 'https://api.restful-api.dev/objects/7'
            }).then((response) => {
                console.log('Resposta: ', response)
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal(7)
            })
        })

        it('buscar dispositivo inexistente', () => {
            cy.request({
                method: 'GET',
                url: 'https://api.restful-api.dev/objects/xXxXxX',
                failOnStatusCode: false
            }).then((response) => {
                console.log('Resposta: ', response)
                expect(response.status).to.equal(404)
                expect(response.body.error).to.equal('Object with id=xXxXxX was not found.')
            })
        })

        it('cadastrar dispositivo', () => {
            cy.request({
                method: 'POST',
                url: 'https://api.restful-api.dev/objects',
                body: {
                    "name": "Apple MacBook Pro 16",
                    "data": {
                       "year": 2019,
                       "price": 1849.99,
                       "CPU model": "Intel Core i9",
                       "Hard disk size": "1 TB"
                    }
                }
            }).then((response) => {
                console.log('Resposta: ', response)
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal("Apple MacBook Pro 16")
            })
        })
    })
})