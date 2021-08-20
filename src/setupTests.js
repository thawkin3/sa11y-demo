import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'
import { setup as sa11ySetup } from '@sa11y/jest'

sa11ySetup()

window.alert = () => {}
HTMLCanvasElement.prototype.getContext = () => {}
