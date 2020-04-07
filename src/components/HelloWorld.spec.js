import HelloWorld from './HelloWorld.vue'
import { mount } from 'cypress-vue-unit-test'

describe('Simple HelloWorld', () => {
    beforeEach(() => { mount(HelloWorld) })

    it('CLI documentation link is correct', () => {
        cy.get('[data-testid=cli-docs-link]')
            .and('have.attr', 'href')
            .and('include', 'cli.vuejs.org')
    })
})