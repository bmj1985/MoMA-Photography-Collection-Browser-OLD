filterIntaglio() {
      let intaglio = this.artworks.filter(artwork => {
        if (artwork.Medium != null) {
          return artwork;
        }
      });
      let stringIntaglio = intaglio.filter(photograph => {
        if (
          photograph.Medium.toLowerCase().includes('intaglio') === true
        ) {
          return photograph;
        }
      });
      this.mutatedArtworks = stringIntaglio;
    },