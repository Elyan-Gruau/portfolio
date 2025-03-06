module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'import/extensions': [
      'error', // Force l'erreur si l'extension est omise
      'always', // Toujours exiger l'extension
      {
        js: 'never', // On n'exige pas l'extension .js pour les fichiers JS
        jsx: 'never', // De même pour .jsx
        ts: 'never', // De même pour .ts
        tsx: 'never', // Et .tsx
        // Tu peux ajouter d'autres extensions si nécessaire
      },
    ],
  },
};
