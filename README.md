# Aragon Callscript Simulator

> Simulate the effect of a callscript script **_before_** you put it to a vote

## 1. Configure Tenderly

create the environment `cat .env.example > .env`

Then add necessary configuration

```
    TENDERLY_PROJECT=...
    TENDERLY_USER=...
    TENDERLY_ACCESS_KEY=...
```

## 2. Configure the Call Script

modify the config in `./src/config.ts`

## 3. Test the script

test the script with `yarn dryrun`

## 4. Run script

**_Note:_** creating a vote requires you to have [frame](https://frame.sh) installed on your machine with a key containing permissions to create votes in your DAO

create a vote in the dao with `yarn create-vote`
