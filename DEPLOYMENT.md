# Vocabulary Hub - Azure Deployment

This repository contains the deployed Vocabulary Hub for the DiSHACLed project.

## 🌐 Live Application

**Frontend**: https://dishacledvocabhub.z6.web.core.windows.net/

**Backend Services**:
- Oxigraph RDF Database: https://vocabhub-oxigraph.azurewebsites.net
- YARRRML Mapping Service: https://vocabhub-yarrrml.azurewebsites.net

## 🚀 Deployment

This application is automatically deployed via GitHub Actions on every push to the `main` branch.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers automatically
3. Workflow builds the React app using Vite
4. Compiled assets are deployed to Azure Storage Static Website
5. Application is live in ~2 minutes

### Manual Deployment Trigger

You can manually trigger a deployment from GitHub:
1. Go to https://github.com/DiSHACLed/demonstrator/actions
2. Select "Build and Deploy to Azure Storage" workflow
3. Click "Run workflow"

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

### Backend Service URLs

When using the application, configure these URLs:
- **YARRRML Mapping Service**: `https://vocabhub-yarrrml.azurewebsites.net`
- **Oxigraph RDF Database**: `https://vocabhub-oxigraph.azurewebsites.net`

### Environment Variables (GitHub Secrets)

The following secrets are configured in the GitHub repository:
- `AZURE_STORAGE_ACCOUNT`: Azure Storage account name
- `AZURE_STORAGE_KEY`: Azure Storage access key

## 📚 Features

- **Data Portal**: Load DCAT-AP feeds and map datasets to RDF using YARRRML
- **RDF Portal**: Display RDF dataset distributions and export with profile alignments
- **Alignment Pipelines**: Manage and execute SPARQL-based profile alignment pipelines
- **Dataset Profile Registry**: Overview of dataset profiles and their relationships

## 🔧 Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **RDF Libraries**: N3.js, JSON-LD, YARRRML Parser
- **Hosting**: Azure Storage Static Website
- **CI/CD**: GitHub Actions

## 📦 Azure Resources

### Storage Account
- **Name**: dishacledvocabhub
- **Type**: StorageV2 (General Purpose v2)
- **Location**: West Europe
- **Static Website**: Enabled

### Backend Services
- **Oxigraph**: Container-based RDF triple store (Oxigraph/oxigraph:latest)
- **YARRRML**: YARRRML to RML conversion service
- **App Service Plan**: dishacled-plan (B1 Basic, Linux)
- **Resource Group**: dishacled-rg

## 🔗 Related Projects

- **Original Repository**: https://github.com/IDLabResearch/vocabulary-hub
- **Water Level API**: https://dishacled-api.azurewebsites.net
- **Water Level Frontend**: https://dishacled-frontend.azurewebsites.net

## 📖 Documentation

See the repository root for full deployment documentation.

## ⚙️ Maintenance

### View Deployment Status
```bash
# View recent workflow runs
gh run list --workflow="deploy.yml" --limit 5

# View specific run
gh run view <run-id>
```

### Update Application
```bash
# Make changes...
git add .
git commit -m "Description of changes"
git push
# Deployment happens automatically!
```

### Restart Backend Services
```powershell
az webapp restart --resource-group dishacled-rg --name vocabhub-oxigraph
az webapp restart --resource-group dishacled-rg --name vocabhub-yarrrml
```

## 📄 License

MIT License (inherited from original repository)

## 👥 Credits

- Original vocabulary-hub: IDLabResearch
- Azure deployment: DiSHACLed project
