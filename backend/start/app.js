"use strict";

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  "@adonisjs/framework/providers/AppProvider",
  "@adonisjs/auth/providers/AuthProvider",
  "@adonisjs/bodyparser/providers/BodyParserProvider",
  "@adonisjs/cors/providers/CorsProvider",
  "@adonisjs/lucid/providers/LucidProvider",
  "@adonisjs/validator/providers/ValidatorProvider",
  "@adonisjs/antl/providers/AntlProvider",
  "@adonisjs/mail/providers/MailProvider",
  "@adonisjs/framework/providers/ViewProvider",
  "adonis-kue/providers/KueProvider",
  "@adonisjs/redis/providers/RedisProvider",
  "@adonisjs/websocket/providers/WsProvider",
  "@adonisjs/session/providers/SessionProvider"
];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  "@adonisjs/lucid/providers/MigrationsProvider",
  "adonis-kue/providers/CommandsProvider",
  "@adonisjs/vow/providers/VowProvider"
];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [];

/*
|--------------------------------------------------------------------------
| Jobs
|--------------------------------------------------------------------------
|
| Here you store your queue jobs
|
*/
const jobs = ["App/Jobs/ForgotPasswordMail"];

module.exports = { providers, aceProviders, aliases, commands, jobs };
