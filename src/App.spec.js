import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import { mount } from 'cypress-vue-unit-test'

describe('Router example', () => {
    beforeEach(() => {
        mount(
            {
                router,
                render(h) { return h(App) }
            },
            { extensions: { plugins: [ VueRouter ] } }
        )
        // mount({
        //     router,
        //     render: h => h(App)
        //   })
    })
    it('lets me go between the About and Home page', () => {
        cy.get('[data-testid=about-link')
          .click()

        cy.get('.about').should('contain.text', 'about page')

        cy.get('[data-testid=home-link')
          .click()

        cy.get('[data-testid=hello-world-homepage').should('exist')
    })
})