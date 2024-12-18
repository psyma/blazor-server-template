# Blazor Server App Template

# What's included?
```
1. npm modules support
2. tailwindcss support
3. flowbite support
```

# Install node modules
```
1. npm install
```

# Compile js & css
```
1. npx tailwindcss -i ./wwwroot/app.css -o ./wwwroot/app.min.css --watch
2. npm run watch
```

# Migrations
```
1. dotnet ef migrations add Initial
2. dotnet ef database update
``` 

# Production mode
```
1. npm run build
2. build the project in release mode
```