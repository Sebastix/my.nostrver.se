# my.nostrver.se

This is a Nostr client (hard)forked from [Hamstr](https://hamstr.to).
I'm modifying this client to scratch some own itches while using lots of other clients. I know my way around with Vue and Javascript building web applications. I'm not familiar with Quasar.
Please have a look at the list of milestones which I would pick up if I'm able to spend some time on this client: https://github.com/Sebastix/my.nostrver.se/milestones.

## Current features
* Login with an extension (NIP-07)
* Installable as a progressive web app
* Chronological sorted view with text notes (kind 1) from who you're following
* Configure your own relays
* View thread on one note
* View profile
* Zap a profile

## Roadmap

- [ ] Implement inline references with NIP-27
- [ ] Add a view with trending events (https://api.nostr.band/)
- [ ] Make it lighter, less is more
  - Make it easier to maintain
  - Easier to debug
  - Better overall performance
  - Easier to start with a fork
- [ ] Contact list synchronisation with NIP-65
- [ ] Create a custom feed with events (inspired by Coracle)
  - Filter on relays
  - Filter on languages
  - Filter on kinds
  - Filter on tags
- [ ] Advanced posting
  - Select kind
  - Select relays
  - Schedule
  - Preview raw before publishing (dry run event signing)
- [ ] Add a view with all communities (NIP-72 kind 34550)
  - What are the relays with the best community coverage?
- [ ] Add a view with all long-form content (NIP-23 kind 30023)
- [ ] Add a view with all highlights (kind 9802, a specific client event-kind so unrelated to a NIP atm, NIP-84 PR is open)
- [ ] Add a view with all zap goals (NIP-75 kind 9041)
- [ ] Add option to view raw data of each event
- [ ] Add a language filter for events / content
- [ ] Come up with a better name for this client
- [ ] Login with a key manager (NIP-46)
- [ ] Advanced view with all your own events
  - datetime
  - kind
  - content
  - tags
  - signature
  - filter on relays
  - download a selection of events as a backup (JSON)
- [ ] Advanced view with your social graph
  - You're following
  - You follow
  - 2-directional people (people you follow and are following you back)
  - People you had most interactions with

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
