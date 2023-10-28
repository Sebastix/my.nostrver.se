# my.nostrver.se

This is a Nostr client (hard)forked from [Hamstr](https://hamstr.to).
I'm modifying this client to scratch some own itches while using lots of other clients. I know my way around with Vue and Javascript building web applications. I'm not familiar with Quasar.
Please have a look at the list of milestones which I would pick up if I'm able to spend some time on this client: https://github.com/Sebastix/my.nostrver.se/milestones.

## Goals / feature wishes

- [ ] Implement inline references with NIP-27
- [ ] Make it lighter, less is more
  - Make it easier to maintain
  - Easier to debug
  - Better overall performance
  - Easier to start with a fork
- [ ] Contact list synchronisation with NIP-65
- [ ] Add a view with all communities (NIP-72 kind 34550)
  - What are the relays with the best community coverage?
- [ ] Add a view with all long-form content (NIP-23 kind 30023)
- [ ] Add a view with all highlights (kind 9802, a specific client event-kind so unrelated to a NIP)
- [ ] Add a view with all zap goals (NIP-75 kind 9041)
- [ ] Add option to view raw data of each event
- [ ] Add a language filter for events / content
- [ ] Come up with a better name for this client

### Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```


### Build the app for production
```bash
quasar build
```

## License

[GNU General Public License version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)

## Contact

Sebastian Hagens - [sebastix.nl/contact](https://sebastix.nl/contact)

npub: `npub1qe3e5wrvnsgpggtkytxteaqfprz0rgxr8c3l34kk3a9t7e2l3acslezefe`
handle: `sebastian@sebastix.dev`
