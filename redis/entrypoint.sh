echo "yes" | redis-cli --cluster create \
  127.0.0.1:7000 \
  --cluster-replicas 1
echo "🚀 Redis cluster ready."
