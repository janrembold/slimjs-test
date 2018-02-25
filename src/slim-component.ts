import {Slim} from "slim-js/Slim"
import {tag, template, useShadow} from "slim-js/Decorators"

@tag('awesome-app')
@template('<h1>Test</h1>')
@useShadow(true)
class AwesomeApp extends Slim {}